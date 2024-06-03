import Ic_facebook from '../assets/icon/icon_facebook.svg';
import Ic_instagram from '../assets/icon/icon_instagram.svg';
import Ic_twitter from '../assets/icon/icon_twitter.svg';
import Ic_mail from '../assets/icon/icon_mail.svg';
import Ic_twitch from '../assets/icon/icon_twitch.svg';
import { useLocation } from 'react-router';

const Footer = () => {
    const { pathname } = useLocation();
    if (pathname === '/register') return <></>
    if (pathname === '/login') return <></>
    return (
        <footer id="footer" className="container-local section-footer">
            <div className="footer-address">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="footer-services">
                <p>Our Services</p>
                <p>Why Us</p>
                <p>Testimonial</p>
                <p>FAQ</p>
            </div>
            <div className="footer-icon">
                <p>Connect with us</p>
                <ul className="footer-icon-img">
                    <li><img src={Ic_facebook} alt="ic-balls" /></li>
                    <li><img src={Ic_instagram} alt="ic-balls" /></li>
                    <li><img src={Ic_twitter} alt="ic-balls" /></li>
                    <li><img src={Ic_mail} alt="ic-balls" /></li>
                    <li><img src={Ic_twitch} alt="ic-balls" /></li>
                </ul>
            </div>
            <div className="footer-logo">
                <p>Copyright Binar 2022</p>
                <div className="header-logo"></div>
            </div>
        </footer>
    )
}

export default Footer