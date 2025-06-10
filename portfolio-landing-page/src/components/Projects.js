import React from 'react';

const Projects = () => {
    const projectList = [
        {
            title: 'Project One',
            description: 'A brief description of Project One.',
            liveLink: 'https://example.com/project-one',
            repoLink: 'https://github.com/username/project-one'
        },
        {
            title: 'Project Two',
            description: 'A brief description of Project Two.',
            liveLink: 'https://example.com/project-two',
            repoLink: 'https://github.com/username/project-two'
        },
        {
            title: 'Project Three',
            description: 'A brief description of Project Three.',
            liveLink: 'https://example.com/project-three',
            repoLink: 'https://github.com/username/project-three'
        }
    ];

    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                {projectList.map((project, index) => (
                    <div key={index} className="project-item">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">View Live</a>
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">View Repository</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;