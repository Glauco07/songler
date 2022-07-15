import React, { useRef, useState, useEffect } from "react";
import "./Player.css";
import mocked_tracks from "../mocked_tracks";
let numberOfRounds = 3;
let audio = new Audio();

const handlePlayer = (audio, playing) => {
    if (playing) audio.play();
    else audio.pause();
};

const Player = () => {
    let answer = useRef();
    let answers = useRef();
    let [roundNumber, setRoundNumber] = useState(numberOfRounds);
    const [guesses, setGuesses] = useState([]);
    const [playlist, setPlaylist] = useState([]);

    const getPlaylist = () => {
        setPlaylist(mocked_tracks);
        return;
        // fetch("http://localhost:5000/playlist", { credentials: "include" })
        //     .then((response) => response.json())
        //     .then((body) => {
        //         setPlaylist(body);
        //     });
    };

    const getResult = async (e) => {
        if (e.target.innerText === answer.current.title) {
            document.getElementById("rightAnswer").classList.remove("hide");
            e.target.classList.add("rightAnswer__button");
        } else {
            document.getElementById("wrongAnswer").classList.remove("hide");
            e.target.classList.add("wrongAnswer__button");
        }
        handlePlayer(audio, false);
        await sleep(1000);
        setRoundNumber(roundNumber - 1);
    };

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    useEffect(() => {
        if (playlist.length < 1 || roundNumber <= 0) return;
        if (roundNumber === numberOfRounds) handlePlayer(audio, false);

        //reset buttons
        document.getElementById("rightAnswer").classList.add("hide");
        document.getElementById("wrongAnswer").classList.add("hide");
        document.querySelectorAll(".guessButton").forEach((e) => {
            e.classList.remove("wrongAnswer__button");
            e.classList.remove("rightAnswer__button");
        });

        //mount next round
        answers.current = playlist.splice(0, roundNumber);
        answer.current = answers.current.pop();
        const round = playlist.splice(0, 5);
        round.push(answer.current);

        //remove unnecessary text
        round.forEach((e) => {
            e.title = e.title.split("(")[0];
        });

        round.sort(() => Math.random() - 0.5);
        setGuesses(round);
        audio = new Audio(answer.current.audio);
        handlePlayer(audio, true);
    }, [playlist, roundNumber]);

    return (
        <div className='player'>
            {guesses.length === 0 ? (
                <div>
                    <button
                        className='guessButton startButton'
                        onClick={getPlaylist}>
                        Start
                    </button>
                </div>
            ) : (
                <>
                    <p className='roundNumber'>
                        {numberOfRounds - roundNumber + 1}
                    </p>
                    <div className='button-container'>
                        <button className='guessButton' onClick={getResult}>
                            {guesses[0].title}
                        </button>
                        <button className='guessButton' onClick={getResult}>
                            {guesses[1].title}
                        </button>
                        <button className='guessButton' onClick={getResult}>
                            {guesses[2].title}
                        </button>
                        <button className='guessButton' onClick={getResult}>
                            {guesses[3].title}
                        </button>
                        <button className='guessButton' onClick={getResult}>
                            {guesses[4].title}
                        </button>
                        <button className='guessButton' onClick={getResult}>
                            {guesses[5].title}
                        </button>
                    </div>
                </>
            )}
            <p id='rightAnswer' className='hide'>
                Acertou!
            </p>
            <p id='wrongAnswer' className='hide'>
                Errou!
            </p>
        </div>
    );
};

export default Player;
