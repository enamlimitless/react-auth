import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './Navbar.css';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(setLoggedInUser)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container" id="border">
                    <a className="navbar-brand logo" href="/">Smooth Rides</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ml-auto" id="navbarNav">
                        <ul className="navbar-nav ml-auto" style={{marginLeft:"auto"}}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/destination">Destination</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/" >{loggedInUser.name}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;