import './sass/skills.sass';

const Skills = () => {
    return (
        <section id="skills">
            <div className="skills-container">
                <h1>Skills</h1>
                <div className="skills-card">
                    <p className='content'>My skills are improving day by day. Shear dedication and determination bring me the power to attain all these skills.</p>
                    <div className='skill-container'>
                        <div className="skill-category-container">
                            <div className="skill-category">
                                <h2>Languages</h2>
                            </div>
                            <div className="skill-category-items">
                                <p>Python</p>
                                <p>Javascript</p>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>C/C++</p>
                                <p>MySQL</p>
                                <p>MongoDB</p>
                            </div>
                        </div>
                        <div className="skill-category-container">
                            <div className="skill-category">
                                <h2>Frameworks</h2>
                            </div>
                            <div className="skill-category-items">
                                <p>NextJS</p>
                                <p>ReactJS</p>
                                <p>Django</p>
                                <p>Flutter</p>
                                <p>Bootstrap</p>
                                <p>Tailwind CSS</p>
                                <p>NodeJS</p>
                            </div>
                        </div>
                        <div className="skill-category-container">
                            <div className="skill-category">
                                <h2>Development Tools</h2>
                            </div>
                            <div className="skill-category-items">
                                <p>Git</p>
                                <p>GitHub</p>
                                <p>VSCode</p>
                                <p>Figma</p>
                                <p>AdobeXD</p>
                            </div>
                        </div>
                        <div className="skill-category-container">
                            <div className="skill-category">
                                <h2>Soft Skills</h2>
                            </div>
                            <div className="skill-category-items">
                                <p>Leadership</p>
                                <p>Team Management</p>
                                <p>Communication</p>
                                <p>Presentation Skills</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}

export default Skills;


