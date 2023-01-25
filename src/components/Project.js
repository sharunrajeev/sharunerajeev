import './sass/project.sass';
import tedx from '../assets/projects/tedx.mp4';
import seds from '../assets/projects/seds.mp4';
import spaceup from '../assets/projects/spaceup.mp4';
import ProjectItem from './subcomponents/ProjectItem';

const Project = () => {
    return (
        <section id="project">
            <div className="project-container">
                <h1>Projects</h1>
                <div className="project-card-container">
                    <ProjectItem project_name="SpaceUP CUSAT" project_src={spaceup} project_url="https://spaceupcusat.org/" project_content="Space themed website based on React and Django. Workes beautifully in all screen sizes." />
                    <ProjectItem project_name="TedX StTheresas" project_src={tedx} project_url="https://tedxstteresascollege.in/" project_content="This is a website for TedX StTheresas. It is a website for the TedX event in StTheresas.
                                Website build from scratch using Next.js and Tailwind CSS." />            
                    <ProjectItem project_name="SEDS CUSAT" project_src={seds} project_url="https://sedscusat.org/" project_content="Deployed a fully fledged website using HTML, CSS ,JS and Django and Digital Ocean cloud services." />            
                </div>

            </div>
        </section>
    );
}

export default Project;