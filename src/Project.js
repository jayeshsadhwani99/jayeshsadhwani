import React from 'react';
import './stylesheets/Project.css';

function Project() {
    return (
        <div className='project'>
            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' />
            <div class="project__content">
                <h2>Wool Halt</h2>
                <h3>This is a an e-commerce site designed and built by me</h3>
                <div class="project__info">
                    <div className="project__block">
                        <br /><h3>Technologies used:</h3>
                        <h4>Frontend: HTML, CSS, JS</h4>
                        <h4>Backend: NodeJS, MongoDB</h4>
                    </div>
                    <div className="project__block">
                        <br /><h3>Features:</h3>
                        <h4>
                            User Authentication, Database, cart functionality, 
                            <br />Place and view orders, all admin controls and more...
                        </h4>
                    </div>
                </div>
                <div class="project__buttons">
                    <a href='https://quiet-ridge-27931.herokuapp.com/' target="_blank">View Site</a>
                </div>
            </div>
        </div>
    )
}

export default Project
