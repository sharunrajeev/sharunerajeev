import './sass/contact.sass';
import { BsGithub, BsInstagram, BsTwitter, BsTelegram, BsDiscord } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { FiFigma } from "react-icons/fi";

const Contact = () => {
    return (
        <section id="contact">
            <div className='contact__container'>
                <h1>Hello</h1>
                <div className="contact__card">
                    <h2>Get in touch 👋</h2>
                    <p>Feel free to contact me for any work or suggestions below</p>
                    <div className="contact__card__details">
                        <div className="contact__card__details__item">
                            <BsGithub />
                        </div>
                        <div className="contact__card__details__item">
                            <BsTwitter />
                        </div>
                        <div className="contact__card__details__item">
                            <BsTelegram />
                        </div>
                        <div className="contact__card__details__item">
                            <MdMail />
                        </div>
                        <div className="contact__card__details__item">
                            <BsInstagram />
                        </div>
                        <div className="contact__card__details__item">
                            <BsDiscord />
                        </div>
                        <div className="contact__card__details__item">
                            <FiFigma />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;