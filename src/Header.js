import React from 'react';
import './stylesheets/Header.css';
import Buttons from './Buttons';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return (
        <div className='header'>
            {/* <div class="header__navigation">
                <IconButton>
                    <MenuIcon fontSize='large' className="header__icon" />
                </IconButton>
            </div> */}
            <div className="header__box">
                <h1>Hello, Nice to meet you!
                <br></br>I'm Jayesh Sadhwani.</h1>
                <div class="buttons">
                    <a href="#" className='header__button'>Projects</a>
                    <a href="#" className='header__button'>Ventures</a>
                </div>
                <Buttons />
            </div>
            {/* <Buttons /> */}
        </div>
    )
}

export default Header;
