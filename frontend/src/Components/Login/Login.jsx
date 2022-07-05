import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./Login.css";

export default function Login() {
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
    <div>
      {" "}
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
            <button className="login-button">Login</button>
          </form>
          {getUser()}
        </>
      )}
      <Modal image={user.img} />
    </div>
  );
}
