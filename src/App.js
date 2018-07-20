import React, { Component } from "react";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header";
import FlagCard from "./components/FlagCard/FlagCard";
import Footer from "./components/Footer";
import flags from "./flags.json";
import "./App.css";

class App extends Component {
  state = {
    flags,
    selectedFlags: [],
    loses: 0,
    score: 0,
    highScore: 0,
    msg: ""
  };

  componentDidMount() {
    this.shuffleFlags();
  }

  handleFlagCardClick = id => {
    if (this.state.selectedFlags.includes(id)) {
      this.setState({ msg: "GAME OVER... try again!" });
      let lose = this.state.loses + 1;
      let score = this.state.score;
      let highScore = this.state.highScore;
      if (score > highScore) {
        highScore = score;
        this.setState({ highScore: highScore });
      }
      score = 0;
      this.setState({ score: score, loses: lose, selectedFlags: [] });
      this.shuffleFlags();
    } else {
      let score = this.state.score + 1;
      if (score === 9) {
        this.setState({ msg: "YOU WON!!!" });
        this.setState({ score: 0, selectedFlags: [] });
      } else {
        let selectedFlag = this.state.selectedFlags;
        selectedFlag.push(id);
        this.setState({
          msg: this.randomMsg(),
          selectedFlags: selectedFlag,
          score: score
        });
        this.shuffleFlags();
      }
    }
  };

  shuffleFlags = () => {
    const flagsCopy = this.state.flags;
    let total = flagsCopy.length;
    const shuffled = [];
    while (total) {
      let index = Math.floor(Math.random() * flagsCopy.length);
      if (index in flagsCopy) {
        shuffled.push(flagsCopy[index]);
        delete flagsCopy[index];
        total--;
      }
    }
    this.setState({ flags: shuffled });
  };

  randomMsg = () => {
    const msgArr = [
      "Good job!",
      "Keep on going!",
      "Awesome!",
      "Lets see you do that again...",
      "Niceeeeeeee!"
    ];
    let randInd = Math.floor(Math.random() * msgArr.length);
    return `${msgArr[randInd]}`;
  };

  render() {
    return (
      <div>
        <div className="App">
          <Header
            loses={this.state.loses}
            score={this.state.score}
            highScore={this.state.highScore}
          />
          <br />
          <br />
          <div className="text-center">
            <br />
            <br />
            <h4
              className="message text-center mx-auto"
              style={{ "background-color": "#fcf7f7", width: "300px" }}
            >
              <b> {this.state.msg}</b>
            </h4>
          </div>
          <Wrapper>
            {this.state.flags.map(flags => (
              <FlagCard
                id={flags.id}
                key={flags.id}
                image={flags.image}
                handleFlagCardClick={this.handleFlagCardClick}
              />
            ))}
          </Wrapper>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
