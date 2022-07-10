import React, { useRef, useState, useEffect } from "react";
import "./Player.css";
import mocked_tracks from "../mocked_tracks";

const Player = () => {
  let answer = useRef();
  let answers = useRef();
  const [guesses, setGuesses] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const getPlaylist = () => {
    setPlaylist(mocked_tracks);
    return;
    fetch("http://localhost:5000/playlist", { credentials: "include" })
      .then((response) => response.json())
      .then((body) => {
        setPlaylist(body);
      });
  };

  const gameLogic = () => {
    if (playlist.length < 1) return
    let numberOfRounds = 3;
    answers.current = playlist.splice(0, numberOfRounds);
    console.log(playlist);
    // for (const answer in answers) {
    //   console.log(answers[answer]);
    // }

    while (numberOfRounds--) {
      console.log('começou')
      console.log(numberOfRounds);
      let round = playlist.splice(0, 5);
      answer.current = answers.current.pop()
      round.push(answer.current);
      setGuesses(round);
      console.log(round);
    }
  };

  const getResult = (button) => {
    return button.target.innerText === answer.current.title
  }

  useEffect(gameLogic, [playlist]);

  return (
    <div className="player">
      {guesses.length === 0 ? (
        <div>
          <button onClick={getPlaylist}>Start</button>
        </div>
      ) : (
        <div>
          <button onClick={getResult}>{guesses[0].title}</button>
          <button onClick={getResult}>{guesses[1].title}</button>
          <button onClick={getResult}>{guesses[2].title}</button>
          <button onClick={getResult}>{guesses[3].title}</button>
          <button onClick={getResult}>{guesses[4].title}</button>
          <button onClick={getResult}>{guesses[5].title}</button>
        </div>
      )}
    </div>
  );
};

export default Player;
