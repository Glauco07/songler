import React, { useEffect, useState } from "react";
import "./nav.css";

const Nav = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/user", { credentials: "include" })
      .then((response) => response.json())
      .then((body) => setUser({ name: body.display_name }))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="nav-wrap">
      <div className="nav">
        <a href="/home">Home</a>
        <a href="/profile">Profile</a>
        <a href="/history">History</a>
        <a href="/game">Play</a>
      </div>
      {user.name !== undefined ? (
        <a id="username" href="/login">
          {user.name}
        </a>
      ) : (
        <form action="http://localhost:5000/login" method="post">
          <button className="home-button">Login</button>
        </form>
      )}
    </div>
  );
};

export default Nav;
