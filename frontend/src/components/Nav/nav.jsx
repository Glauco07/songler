import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Modal from "../Modal/Modal"

const Nav = () => {
  const [user, setUser] = useState({});
  const [show, setShow] = useState(true);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };

  useEffect(() => {
    fetch("http://localhost:5000/user", { credentials: "include" })
      .then((response) => response.json())
      .then((body) => setUser({ name: body.id }))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="nav-wrap">
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/history">History</Link>
        <Link to="/game">Play</Link>
      </div>
      {user.name !== undefined ? (
        <p onClick={() => setShow(prev => !prev)} id="username" >
          {user.name}
        </p>
      ) : (
        <form onSubmit={onSubmit} action="http://localhost:5000/login" method="post">
          <button className="home-button">Login</button>
        </form>
      )}
      <>
            {show && <Modal/>}
      </>
      
    </div>
  );
};

export default Nav;
