import "./Header.scss";
import logo from "../../../src/assets/Logo/foodLogo.png";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <>
            <nav className="navbar">
                <Link className="navbar__logo" to={"/"}>
                    <img className="navbar__logo-image" src={logo} alt="Logo Image" />
                </Link>
                <Link className="navbar__buttonBox" to="/add">
                    <div className="navbar__button">Add</div>
                </Link>
                <Link className="navbar__buttonBox" to="/view">
                    <div className="navbar__button">View</div>
                </Link>
            </nav>
        </>
    );
};

export default Header;
