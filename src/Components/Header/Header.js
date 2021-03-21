import React from 'react';
import { useHistory } from 'react-router';
import './Header.css';
const Header = (props) => {
    console.log(props)
    const {name, vehicle} = props.car || {};

    const history = useHistory()

    const showLogin = id =>{
        const url = `login`;
        history.push(url)
    }

    return (
        <div>
            <div className="header">
                <div className="header-style" onClick={showLogin}>
                    <img src={vehicle} alt=""/>
                    <h2>{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Header;