import { Link } from "react-router-dom";
import logo from 'assets/img/logo-small.png'

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="flex-row gap-2">
        <div className="flex-row space-between w-100">
          <div className="navbar-logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <ul className="navbar-desktop flex-row-align justify-end w-100 ">
            <li>
              <Link to="/diensten">Services</Link>
            </li>
            <li>
              <Link to="/referenties">References</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-signup flex-row">
          <button
            className="custom-button button-login button-desktop flex align-items-center m-05"
            type="button"
          >
            Aanmelden
          </button>
          <button
            className="custom-button button-registration button-choiceSec button-desktop flex align-items-center m05"
            type="button"
          >
            Registreer
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
