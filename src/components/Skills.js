import './sass/skills.sass';

const Skills = () => {
    return (
        <section id="skills">
            <div className="skills-container">
                <h1>Skills</h1>
                <div className="skills-card">
                    <div className="skills-card-item">
                        <p className='item-content'>My skills are improving day by day. Shear dedication and determination bring me the power to attain all these skills.</p>
                    </div>
                    <div className="skill-statistic">
                        <div className="skill-statistic-percentage">
                            <div className="skill-statistic-percentage-item">
                                <p className='item-content'>HTML</p>
                                <div className="skill-statistic-percentage-item-bar">
                                    <div className="skill-statistic-percentage-item-bar-fill" style={{ width: '90%' }}></div>
                                </div>
                                <p className='item-content'>90%</p>
                            </div>
                            <div className="skill-statistic-percentage-item">
                                <p className='item-content'>CSS</p>
                                <div className="skill-statistic-percentage-item-bar">
                                    <div className="skill-statistic-percentage-item-bar-fill" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;