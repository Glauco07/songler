import React, { useRef, useState, useEffect } from "react";
import "./Player.css";
import mocked_tracks from "../mocked_tracks";
let numberOfRounds = 3;

const Player = () => {
    let answer = useRef();
    let answers = useRef();
    let [roundNumber, setRoundNumber] = useState(numberOfRounds);
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

    const getResult = (e) => {
        if (e.target.innerText === answer.current.title)
            e.target.style.backgroundColor = "green";
        else e.target.style.backgroundColor = "red";
        setRoundNumber(roundNumber - 1);
    };

    useEffect(() => {
        answers.current = playlist.splice(0, roundNumber);
        if (playlist.length < 1 || roundNumber <= 0) return;
        let round = playlist.splice(0, 5);
        answer.current = answers.current.pop();
        round.push(answer.current);
        round.sort(() => Math.random() - 0.5);
        setGuesses(round);
        console.log(roundNumber);
    }, [playlist, roundNumber]);

    return (
        <div className='player'>
            <p>{roundNumber}</p>
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
