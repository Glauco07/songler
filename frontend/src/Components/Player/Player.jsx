import React, { useState, useEffect } from "react";
import "./Player.css";

const Player = () => {
  const [playlist, setPlaylist] = useState([]);

  const getPlaylist = () => {
    fetch("http://localhost:5000/playlist", { credentials: "include" })
      .then((response) => response.json())
      .then((body) => setPlaylist(body));
  };

  const audio = new Audio(
    "https://cdns-preview-a.dzcdn.net/stream/c-afc87c284ff12b8a80947bbce13b408b-5.mp3"
  );

  const start = () => {
    audio.play();
  };

  return (
    <div className="player">
      <button onClick={getPlaylist}>Start</button>
      <p>{JSON.stringify(playlist)}</p>
    </div>
  );
};

export default Player;
