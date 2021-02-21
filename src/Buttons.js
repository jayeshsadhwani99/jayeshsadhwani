import React from 'react';
import './stylesheets/Buttons.css';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';

function Buttons() {
    return (
        <div className="buttons">
            <IconButton>
                    <a target="_blank" href='https://www.linkedin.com/in/jayesh-sadhwani-07458b199/'><LinkedInIcon className="header__icon"/></a>
            </IconButton>
            <IconButton>
                <a target="_blank" href='https://github.com/jayeshsadhwani99'><GitHubIcon className="header__icon" /></a>
            </IconButton>
            <IconButton>
                <a target="_blank" href='https://www.instagram.com/jayeshsadhwani99/'><InstagramIcon className="header__icon" /></a>
            </IconButton>
            <IconButton>
                <a target="_blank" href='https://twitter.com/jayeshsadhwani9'><TwitterIcon className="header__icon" /></a>
            </IconButton>
            <IconButton>
                <a target="_blank" href='https://www.facebook.com/jayesh.sadhwani.75'><FacebookIcon className="header__icon" /></a>
            </IconButton>
            <IconButton>
                <a target="_blank" href='mailto:jayeshsadhwani99@gmail.com'><EmailIcon className="header__icon" /></a>
            </IconButton>
        </div>
    )
}

export default Buttons
