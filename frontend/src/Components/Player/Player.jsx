import React, { useRef, useState } from "react";
import "./Player.css";
let audio;

const handlePlayer = (audio, playing) => {
  if (playing) audio.play();
  else audio.pause();
};

const Player = (props) => {
  const [numberOfRounds] = useState(3);
  const [currentRound, setCurrentRound] = useState(1);
  const [guesses, setGuesses] = useState([]);
  const playlist = useRef(props.songs);
  const roundAnswer = useRef();
  const allAnswers = useRef(playlist.current.splice(0, numberOfRounds));

  const getResult = async (e) => {
    document.querySelectorAll(".guessButton").forEach((e) => {
      e.classList.add("disabled");  // disables button after one is clicked
    });
    if (e.target.innerText === roundAnswer.current.title)
      e.target.classList.add("rightAnswer");
    else e.target.classList.add("wrongAnswer");
    handlePlayer(audio, false);
    if (currentRound >= numberOfRounds) return;
    await sleep(1000);
    setCurrentRound(currentRound + 1);
    game();
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function game() {
    if (currentRound >= numberOfRounds) return;
    document.querySelectorAll(".guessButton").forEach((e) => {
      e.classList.remove("wrongAnswer");
      e.classList.remove("rightAnswer");
      e.classList.remove("disabled");
    });
    roundAnswer.current = allAnswers.current.pop();
    playlist.current.sort(() => Math.random() - 0.5);
    const round = playlist.current.slice(0, 5);
    round.push(roundAnswer.current);
    round.sort(() => Math.random() - 0.5);
    setGuesses(round);
    audio = new Audio(roundAnswer.current.audio);
    audio.volume = 0.2;
    handlePlayer(audio, true);
  }

  return (
    <div className="player">
      {guesses.length === 0 ? (
        <div>
          <button onClick={game}>Start</button>
        </div>
      ) : (
        <div>
          <p className="roundNumber">{currentRound}</p>
          <div className="button-container">
            <button className="guessButton" onClick={getResult}>
              {guesses[0].title}
            </button>
            <button className="guessButton" onClick={getResult}>
              {guesses[1].title}
            </button>
            <button className="guessButton" onClick={getResult}>
              {guesses[2].title}
            </button>
            <button className="guessButton" onClick={getResult}>
              {guesses[3].title}
            </button>
            <button className="guessButton" onClick={getResult}>
              {guesses[4].title}
            </button>
            <button className="guessButton" onClick={getResult}>
              {guesses[5].title}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;
