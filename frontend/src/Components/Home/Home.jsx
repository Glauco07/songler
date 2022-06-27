import React from "react";
import "./Home.css";

const Home = () => {
  const hideplayer = () => {
    const player = document.getElementById("dzplayer");
    player.style.zIndex = -99999
    player.style.visibility = "hidden"
    player.style.minWidth = "0px"
    player.style.minHeight = "0px"
    player.style.maxWidth = "0px"
    player.style.maxHeight = "0px"
    DZ.player.play()
}

DZ.init({
    appId: '542942',
    channelUrl: 'https://e-cdns-files.dzcdn.net/js/min/dz.js',
    player: {
        height: '100%',
        width: '100%',
        onload: () => {
            DZ.player.playTracks([3135556, 1152226], false);
        }
    }
});

const monitor = setInterval(() => {
    const elem = document.activeElement;
    if (elem && elem.tagName == 'IFRAME') {
        clearInterval(monitor);
        hideplayer()
    }
}, 100);
  return (
    <>

      <div className="home"></div>
    </>
  );
};

export default Home;
