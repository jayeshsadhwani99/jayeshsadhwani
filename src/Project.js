import React from 'react';
import './stylesheets/Project.css';

function Project({ project }) {
    return (
        <div className='project'>
            <img src={project.imgUrl} />
            <div className="project__content">
                <h2>{project.title}</h2>
                <h3>{project.description}</h3>
                <div className="project__info">
                    <div className="project__block">
                        <br /><h3>Technologies used:</h3>
                        <h4><b>Frontend:</b> {project.frontendtechnologies}</h4>
                        <h4><b>Backend:</b> {project.backendtechnologies}</h4>
                    </div>
                    <div className="project__block">
                        <br /><h3>Features:</h3>
                        <h4>
                            {project.features}
                        </h4>
                    </div>
                </div>
                <div className="project__buttons">
                    <a href={project.siteUrl} target="_blank">View Site</a>
                    {project.codeUrl !== ''? <a href={project.codeUrl} target="_blank">View Code</a> : '' }
                </div>
            </div>
        </div>
    )
}

export default Project
