import React from 'react';
import './stylesheets/Header.css';
import Buttons from './Buttons';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return (
        <div className='header'>
            <div className="header__box">
                <h1>Hello, Nice to meet you!
                <br></br>I'm Jayesh Sadhwani.</h1>
                <div className="buttons">
                    <a href="#projectsLink" className='header__button'>Projects</a>
                    <a href="#about" className='header__button'>About</a>
                </div>
                <Buttons />
            </div>
        </div>
    )
}

export default Header;
