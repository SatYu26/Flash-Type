import React from "react";
import "./TypingChallengeContainer.css";
import ChallengeDetailsCard from "./../ChallengeDetailsCard/ChallengeDetailsCard";

const TypingChallengeContainer = ({ words, characters, wpm }) => {
  return (
    <div className="typing-challenge-container">
      <div className="details-container">
        <ChallengeDetailsCard cardName="Words" cardValue={words} />
        <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
        <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
      </div>
      <div className="typewriter-container">
        <p>this is the real challenge</p>
      </div>
    </div>
  );
};

export default TypingChallengeContainer;
