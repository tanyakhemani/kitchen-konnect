import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <div className="footer__contact">Contact info :</div>
                <a className="footer__email" href="mailto:queries@kitchenkonnect.com">queries@kitchenkonnect.com</a>
            </div>
            
            <div className="footer__iconBox">
                <Link className="footer__icon" to={"https://facebook.com"} target="_blank">
                    <img className="footer__facebook" src="/src/assets/Icons/Icon-facebook.svg" alt="Facebook Icon" />
                </Link>
                <Link className="footer__icon" to={"https://instagram.com"} target="_blank">
                    <img className="footer__instagram" src="/src/assets/Icons/Icon-instagram.svg" alt="Instagram Icon" />
                </Link>
                <Link className="footer__icon" to={"https://twitter.com"} target="_blank">
                    <img className="footer__twitter" src="/src/assets/Icons/Icon-twitter.svg" alt="Twitter Icon" />
                </Link>
            </div>
            
        </footer>
    );
};

export default Footer;