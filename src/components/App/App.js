import React, { Component } from "react";
import "./App.css";
import Nav from "./../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSection";

const TotalTime = 60;
const serviceUrl = "http://metaphorpsum.com/paragraphs/1/8";
const DefaultState = {
  selectedParagraph: "Hello World!",
  testInfo: [],
  timerStarted: false,
  timeRemaining: TotalTime,
  words: 0,
  characters: 0,
  wpm: 0,
};

class App extends Component {
  state = DefaultState;
  render() {
    // fetch(serviceUrl)
    //   .then((response) => response.text())
    //   .then((information) => {});
    return (
      <div className="app">
        <Nav />
        <Landing />
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
