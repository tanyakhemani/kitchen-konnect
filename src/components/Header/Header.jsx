import "./Header.scss";
import logo from "../../../public/vite.svg";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <>
            <nav className="navbar">
                <div className="navbar__logo">
                    <img className="navbar__logo-image" src={logo} alt="Logo Image" />
                </div>
                <Link className="navbar__button" to="/add">
                    <div>Add</div>
                </Link>
                <Link className="navbar__button" to="/view">
                    <div>View</div>
                </Link>
            </nav>
        </>
    );
};

export default Header;
