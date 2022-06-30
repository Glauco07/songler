import { Link } from "react-router-dom";
import Login from "../Login/Login";
import "./Nav.css";

const Nav = () => {
    return (
        <div className='nav-wrap'>
            <div className='nav'>
                <Link to='/'>Home</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/history'>History</Link>
                <Link to='/game'>Play</Link>
            </div>
            <Login />
        </div>
    );
};

export default Nav;
