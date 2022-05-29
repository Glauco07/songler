import React, { useEffect, useState } from "react";
import "./Modal.css";

export default function Modal() {
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/user", { credentials: "include" })
            .then((response) => response.json())
            .then((body) => setUser({ img: body.images[0].url }))
            .catch((e) => console.log(e));
    }, []);
    console.log(user.img);
    return (
        <div className='Modal'>
            <div className="modal__img">
                <img src={user.img} alt='Profile' />
            </div>
            <a href='/Logout'>Logout</a>
        </div>
    );
}
