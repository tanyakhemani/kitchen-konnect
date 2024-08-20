import "./Header.scss";
import logo from "../../../src/assets/Logo/foodLogo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    }

    return (
        <>
            <nav className="navbar">
                <Link className={`navbar__logo`} to={"/"}>
                    <img className="navbar__logo-image" src={logo} alt="Logo Image" />
                </Link>
                <Link className={`navbar__buttonBox ${isActive('/add')?'active':''}`} to="/add">
                    <div className="navbar__button">Add</div>
                </Link>
                <Link className={`navbar__buttonBox ${isActive('/view')?'active':''}`} to="/view">
                    <div className="navbar__button">View</div>
                </Link>
            </nav>
        </>
    );
};

export default Header;
