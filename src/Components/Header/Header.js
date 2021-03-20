import React from 'react';
import './Header.css';
const Header = (props) => {
    console.log(props)
    const {name, vehicle} = props.car || {};
    return (
        <div>
            <div className="header">
                <div>
                    <img src={vehicle} alt=""/>
                    <h2>{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Header;