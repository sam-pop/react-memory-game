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
    highScore: 0
  };

  handleGameCardClick = id => {
    if (this.state.selectedFlags.includes(id)) {
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
    } else {
      let score = this.state.score++;
      let selectedFlag = this.state.selectedFlags.push(id);
      this.setState({ selectedFlag });
      console.log(this.state.selectedFlags);
    }
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
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
