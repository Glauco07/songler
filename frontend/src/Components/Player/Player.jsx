import React, { useState, useEffect } from "react";
import "./Player.css";

const Player = () => {
    const [playlist, setPlaylist] = useState();
    const [guesses, setGuesses] = useState();

    const getPlaylist = () => {
        fetch("http://localhost:5000/playlist", { credentials: "include" })
            .then((response) => response.json())
            .then((body) => {
                setPlaylist(body);
                gameLogic();
                console.log(playlist);
            });
    };

    const gameLogic = () => {
        var playlistArray = JSON.parse(playlist);
        console.log(playlistArray);
        var answerArray = playlistArray.splice(0, 3); // get 3 songs from playlist array
        var numberOfRounds = 3;
        var round, answer;
        while (numberOfRounds--) {
            answer = answerArray.pop();
            round = playlistArray.splice(0, 5);
            round.push(answer);
            setGuesses(round);
            console.log(guesses);
        }
    };

    return (
        <div className='player'>
            {playlist === undefined ? (
                <div>
                    <button onClick={getPlaylist}>Start</button>
                </div>
            ) : (
                <div>
                    {JSON.stringify(playlist)}
                    {/* <button>{guesses[0].title}</button>
                    <button>{guesses[1].title}</button>
                    <button>{guesses[2].title}</button>
                    <button>{guesses[3].title}</button>
                    <button>{guesses[4].title}</button>
                    <button>{guesses[5].title}</button> */}
                </div>
            )}
        </div>
    );
};

export default Player;
