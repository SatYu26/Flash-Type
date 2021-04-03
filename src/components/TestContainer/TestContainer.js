import React from "react";
// import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";
import "./TestContainer.css";

const TestContainer = ({ words, characters, wpm }) => {
  return (
    <div className="test-container">
      <div data-aos="fade-up" className="typing-challenge-cont">
        <TypingChallengeContainer
          words={words}
          characters={characters}
          wpm={wpm}
        />
      </div>
      {/* <div className="try-again-cont">
        <TryAgain words={words} characters={characters} wpm={wpm} />
      </div> */}
    </div>
  );
};

export default TestContainer;
