import React from 'react';

const Skills = () => {
    const skills = [
        'JavaScript',
        'React',
        'Node.js',
        'HTML',
        'CSS',
        'Git',
        'Responsive Design',
        'RESTful APIs',
        'Webpack',
        'TypeScript'
    ];

    return (
        <section id="skills" className="skills">
            <h2>My Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;