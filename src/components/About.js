import './sass/about.sass';
import { MdGetApp } from 'react-icons/md';

const About = () => {
    return (
        <section id="about">
            <div className='about-container'>
                <h1>About Me</h1>
                <div className="about-card">
                    <div className="about-card-item">
                        <h2 className='item-heading'>NAME</h2>
                        <h2 className='item-content'>Sharun E Rajeev</h2>
                    </div>
                    <div className="about-card-item">
                        <h2 className='item-heading'>EMAIL</h2>
                        <h2 className='item-content'>sharunpublic@gmail.com</h2>
                    </div>
                    <div className="about-card-item">
                        <h2 className='item-heading'>PHONE</h2>
                        <h2 className='item-content'>+916238578533</h2>
                    </div>
                    <div className="about-card-item">
                        <h2 className='item-heading'>WEBSITE</h2>
                        <h2 className='item-content'>sharunrajeev.me</h2>
                    </div>
                    <div className="about-card-item">
                        <h2 className='item-heading'>LOCATION</h2>
                        <h2 className='item-content'>Kerala, India</h2>
                    </div>
                    <div className="about-card-item">
                        <h2 className='item-heading'>INTREST</h2>
                        <h2 className='item-content'>Reading, Music, Sports, Coding</h2>
                    </div>
                    <div className="about-card-item">
                        <h2 className='item-heading'>SOCIAL</h2>
                        <h2 className='item-content'>Sharun E Rajeev</h2>
                    </div>
                </div>
                <div className='about-content-container'>
                    <div className='about-content'>
                        <p>Enthusiastic <strong>Full Stack Developer</strong> eager to contribute to team
                            success through hard work, attention to detail and excellent
                            organizational skills. Proficient in <strong>Python</strong> and <strong>JavaScript</strong> language and
                            its libraries. Highly motivated to learn, grow and excel in Web
                            industry.</p>
                    </div>
                    <div className="cv-button">
                        <a href='https://drive.google.com/file/d/1IU2CoOE3xHXclxGL6Go8xR4l1ZxQn5XE/view?usp=sharing'><button className="cv-button-item"><p>DOWNLOAD CV</p> <MdGetApp className='mdgetapp' /></button></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
