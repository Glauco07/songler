import React from "react";
import "./Player.css";

const Test = () => {
    const audio = new Audio(
        "https://cdns-preview-a.dzcdn.net/stream/c-afc87c284ff12b8a80947bbce13b408b-5.mp3"
    );

    const start = () => {
        audio.play();
    };

    return (
        <div className='player'>
            <button onClick={start}>Start</button>
        </div>
    );
};

export default Test;
