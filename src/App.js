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
      let lose = this.state.loses++;
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
      this.setState({ msg: "Good job! now pick another flag..." });

      let score = this.state.score++;
      let selectedFlag = this.state.selectedFlags.push(id);
      this.setState({ selectedFlag });
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
          <div className="text-center">
            <br />
            <br />
            <h4>{this.state.msg}</h4>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
