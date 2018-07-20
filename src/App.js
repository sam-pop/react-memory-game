import React, { Component } from "react";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header";
import GameCard from "./components/GameCard/GameCard";
import Footer from "./components/Footer";
import flags from "./flags.json";

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

  handleGameCardClick = id => {
    this.setState({ msg: "" });
    if (this.state.selectedFlags.includes(id)) {
      this.setState({ msg: "YOU LOSE!" });
      let lose = this.state.loses + 1;
      let score = this.state.score;
      let highScore = this.state.highScore;
      if (score > highScore) {
        highScore = score;
        this.setState({ highScore });
      }
      score = 0;
      this.setState({ score });
      this.setState({ lose });
      this.setState({ selectedFlags: [] });
      this.shuffleFlags();
    } else {
      this.setState({ msg: this.randomMsg() });
      let score = this.state.score + 1;
      let selectedFlag = this.state.selectedFlags.push(id);
      this.setState({ selectedFlag, score: score });
      console.log(this.state.selectedFlags);
      this.shuffleFlags();
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
    return msgArr[randInd];
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
            <h4>{this.state.msg}</h4>
          </div>
          <Wrapper>
            {this.state.flags.map(flags => (
              <GameCard
                id={flags.id}
                key={flags.id}
                image={flags.image}
                handleGameCardClick={this.handleGameCardClick}
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
