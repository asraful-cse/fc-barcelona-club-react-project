import React from 'react';
import logo from '../../image/barcelona.jpg';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/club">Club</a>
                <a href="/player">Player</a>
                <a href="/gallery">Gallery</a>
            </nav>
        </div>
    );
};

export default Header;