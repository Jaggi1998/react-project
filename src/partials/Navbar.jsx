import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import avatar from "../images/avatar.svg";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <NavLink className="p-3 navbar-brand nav_img" exact to="/">
                <img src={logo} alt="Logo" />;
              </NavLink>
              <button
                className="navbar-toggler ml-auto navbar-light"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <NavLink activeClassName="menu_active" className="p-3 nav-link text-light font-weight-light" exact to="/courses">
                      Core Curriculum 
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="menu_active" className=" p-3 nav-link text-light font-weight-light" exact to="/resourse">
                      Additional Resourses
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="menu_active" className="p-3 nav-link text-light font-weight-light" exact to="/resourse">
                      <img src={avatar} alt=""/>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
