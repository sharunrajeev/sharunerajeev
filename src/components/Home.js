import './sass/home.sass';
import profile from '../assets/home/profile.png';

const Home = () => {
    return (
        <section id="home" className='container'>
            <div className='profile'>
                <img className='profile-picture' src={profile} alt="profile" />
                <div className='profile-name'>
                    <h1>Hello</h1>
                    <h1>I'm</h1>
                    <h1>Sharun</h1>
                </div>
                <div className='profile-description'>
                    <p>
                        Full Stack Developer
                    </p>
                    <p>UI/UX Designer</p>
                </div>
            </div>

        </section>
    );
}

export default Home;