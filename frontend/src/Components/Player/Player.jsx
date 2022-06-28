import "./Player.css";
import React, { useEffect } from 'react';

const Player = () => {

  useEffect(() => {
    window.DZ.init({
      appId: "542942",
      channelUrl: "https://e-cdns-files.dzcdn.net/js/min/dz.js",
      player: {
        height: "180px",
        width: "30px",
        onload: () => {
          window.DZ.player.playTracks([3135556, 1152226], false);
        }
      }
    });
    
  }, [])

  const hidePlayer = () => {
    const player = document.getElementById("dzplayer");
    player.style.zIndex = -99999;
    player.style.visibility = "hidden";
    player.style.minWidth = "0px";
    player.style.minHeight = "0px";
    player.style.maxWidth = "0px";
    player.style.maxHeight = "0px";
    window.DZ.player.play();
  };

  const monitor = setInterval(() => {
    const elem = document.activeElement;
    if (elem && elem.tagName === "IFRAME") {
      clearInterval(monitor);
      hidePlayer();
    }
  }, 100);
  

  return (
    <div className="Player">
      
      <div id="dz-root"><div className="start-button">Clique para começar!</div></div>
    </div>
  );
};

export default Player;
