import React from 'react';
import './navbar.css';

function NavBar(){
    return (
        <div className= 'navbar'>
            <a href= "#home"> Home </a>
            <a href= "#about"> About Us </a>
            <a href= "#gallery"> Gallery </a> 
            <a href= "#team"> Team </a>
        </div>
    );
}

export default NavBar;