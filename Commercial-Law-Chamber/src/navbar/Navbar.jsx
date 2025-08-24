import {  NavLink } from "react-router-dom"
import Logo from "/Logo.jpg";
import "./navbar.css"
export const Navbar = () => {
  return (
    <div className="container">
      <div>
        <img className="Logo" src={Logo} alt="" />
      </div>

      <div>
        <nav className="navigation">
          <NavLink to="/" className="link">
            Home
          </NavLink>

          <NavLink to="/about" className="link">
            About
          </NavLink>
          <NavLink to="/expertise" className="link">
            Expertise
          </NavLink>
          <NavLink to="/insights" className="link">
            Insights
          </NavLink>
          <NavLink to="/contacts" className="link">
            Contacts
          </NavLink>
        </nav>
      </div>
    </div>
  );
};
