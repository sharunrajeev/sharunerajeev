import './sass/sidebar.sass'
import logo from '../assets/logo.png'

const Sidebar = () => {
    return (
        <aside>
            <div className="sidebar">
                <div className="sidebar-logo">
                    <img className='logo' src={logo} alt="logo" />
                </div>
            </div>
            <nav>
                    <ul>
                        <li>
                            <a href="#home"><h3>HOME</h3></a>
                        </li>
                        <li>
                            <a href="#about"><h3>ABOUT</h3></a>
                        </li>
                        <li>
                            <a href="#project"><h3>PROJECTS</h3></a>
                        </li>
                        <li>
                            <a href="#skills"><h3>SKILLS</h3></a>
                        </li>
                        <li>
                            <a href="#experience"><h3>EXPERIENCE</h3></a>
                        </li>
                        <li>
                            <a href="#contact"><h3>CONTACT ME</h3></a>
                        </li>
                    </ul>
                </nav>
        </aside>
    );
}

export default Sidebar;