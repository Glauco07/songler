import React from 'react';
import './nav.css';


const Nav = () => {
    return (
        <div className="nav-wrap">
        <div className='nav'>
            <a href="/home">Home</a>
            <a href="/profile">Profile</a>
            <a href="/history">History</a>
            <a href="/game">Play</a>
        </div>
            <form action="http://localhost:5000/login" method="post">
                <button className='home-button'>Login</button>
            </form>
        </div>

    )
}

export default Nav;