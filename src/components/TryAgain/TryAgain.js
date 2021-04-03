import React from "react";
import "./TryAgain.css";

const TryAgain = ({ words, characters, wpm }) => {
  const url = "satyamgoyal.codes";
  return (
    <div className="try-again-container">
      <h1>Test Results</h1>
      <div className="results-container">
        <p>
          <b>Characters:</b> {characters}
        </p>
        <p>
          <b>Words:</b> {words}
        </p>
        <p>
          <b>Speed:</b> {wpm} wpm
        </p>
      </div>
      <div>
        <button className="end-buttons start-again-btn">Re-try</button>
        <button
          className="end-buttons share-btn"
          onClick={() => {
            window.open(
              "https://www.facebook.com/sharer/sharer.php?u=" + url,
              "facebook-share-dialog",
              "width=800,height=600"
            );
          }}
        >
          Share
        </button>
        <button
          onClick={() =>
            window.open(
              "https://twitter.com/intent/tweet?text=Check%20this%20out%20" +
                url,
              "Twitter",
              "width=800,height=600"
            )
          }
          className="end-buttons tweet-btn"
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TryAgain;
