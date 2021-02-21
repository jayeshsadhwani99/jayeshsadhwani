import React, { useEffect, useState } from 'react';
import './stylesheets/Projects.css';
import Project from './Project';
import axios from './axios';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        try {
            async function fetchData() {
                const req = await axios.get('/getProjects');
                setProjects(req.data);
            }
            console.log(projects);
            fetchData();
        } catch (e) {
            console.log(e);
        }
    }, []);
    return (
        <div className='projects'>
            <h1>Projects</h1>
            {projects.map((project) => (
                <Project 
                    key={project._id}
                    project={project}
                />
            ))}
        </div>
    )
}

export default Projects
