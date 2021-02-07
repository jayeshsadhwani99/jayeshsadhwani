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
                    <LinkedInIcon fontSize='medium' className="header__icon" />
            </IconButton>
            <IconButton>
                <GitHubIcon fontSize='medium' className="header__icon" />
            </IconButton>
            <IconButton>
                <InstagramIcon fontSize='medium' className="header__icon" />
            </IconButton>
            <IconButton>
                <TwitterIcon fontSize='medium' className="header__icon" />
            </IconButton>
            <IconButton>
                <FacebookIcon fontSize='medium' className="header__icon" />
            </IconButton>
            <IconButton>
                <EmailIcon fontSize='medium' className="header__icon" />
            </IconButton>
        </div>
    )
}

export default Buttons
