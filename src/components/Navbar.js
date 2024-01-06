import { NavLink } from "react-router-dom";
import ThemeToggleBtn from "./ThemeToggleBtn";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <a className="navbar-brand"> Tech तरंग 2024 </a>
      
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="events" className="nav-link">
              Events
            </NavLink>
          </li>

          {/* <li className="nav-item">
              <NavLink className="nav-link" to="gallery">Gallery</NavLink>
            </li> */}

          <li className="nav-item">
            <NavLink className="nav-link" to="updates">
              Updates
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="sponsors">
              Sponsors
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="about">
              About
            </NavLink>
          </li>
          
        </ul>
      <ThemeToggleBtn />
      </div>
    </div>
  );
};

export default Navbar;
