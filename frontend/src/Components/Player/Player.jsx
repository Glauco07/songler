import React, { useRef, useState, useEffect } from "react";
import "./Player.css";
let numberOfRounds = 10;
let audio = new Audio();

const handlePlayer = (audio, playing) => {
  if (playing) audio.play();
  else audio.pause();
};

const Player = (props) => {
  const [ playlist, setPlaylist ] = useState(props.songs)
  let answer = useRef();
  let answers = useRef();
  let [roundNumber, setRoundNumber] = useState(numberOfRounds);
  const [guesses, setGuesses] = useState([]);

  const getResult = async (e) => {
    if (e.target.innerText === answer.current.title)
      e.target.classList.add("rightAnswer");
    else e.target.classList.add("wrongAnswer");
    handlePlayer(audio, false);
    await sleep(1000);
    setRoundNumber(roundNumber - 1);
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    console.log(playlist)
    if (playlist.length < 1 || roundNumber <= 0) return;
    console.log("1");
    document.querySelectorAll(".guessButton").forEach((e) => {
      e.classList.remove("wrongAnswer");
      e.classList.remove("rightAnswer");
    });
    answers.current = playlist.splice(0, roundNumber);
    answer.current = answers.current.pop();
    const round = playlist.splice(0, 5);
    round.push(answer.current);
    round.sort(() => Math.random() - 0.5);
    console.log(round);
    setGuesses(round);
    console.log("Round: " + roundNumber);
    console.log("Current song: " + answer.current.title);
    audio = new Audio(answer.current.audio);
    handlePlayer(audio, true);
  }, [playlist, roundNumber]);

  return (
    <div className="player">
      {guesses.length === 0 ? (
        <div>
          <button>Start</button>
        </div>
      ) : (
        <>
          <p className="roundNumber">{4 - roundNumber}</p>
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
        </>
      )}
    </div>
  );
};

export default Player;
