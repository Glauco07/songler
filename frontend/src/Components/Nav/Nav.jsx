import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Modal from "../Modal/Modal";

const Nav = () => {
  const [user, setUser] = useState({});

  const getUser = () => {
    fetch("http://localhost:5000/user", { credentials: "include" })
      .then((response) => response.json())
      .then((body) =>
        setUser({
          name: body.id,
          img: body.images[0].url,
        })
      )
      .catch((e) => {
        if (!(e instanceof TypeError)) console.log(e);
      });
  };

  return (
    <div className="nav-wrap">
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/history">History</Link>
        <Link to="/game">Play</Link>
      </div>
      {user.name !== undefined ? (
        <p
          id="username"
          onClick={() =>
            document
              .getElementsByClassName("Modal")[0]
              .classList.toggle("modal__show")
          }
        >
          {user.name}
        </p>
      ) : (
        <>
          <form action="http://localhost:5000/login" method="post">
            <button className="home-button">Login</button>
          </form>
          {getUser()}
        </>
      )}
      <Modal image={user.img} />
    </div>
  );
};

export default Nav;
