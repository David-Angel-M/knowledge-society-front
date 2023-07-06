import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import logo from "./logo.svg";

const Nav = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-custom mb-5">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to={user ? "/provider/list" : "/"}>
          <img src={logo} alt="logo" />
          <span> Knowledge Society</span>
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {user ? (
              <>
                {user && <span className="navbar-text">Hello {user.email}</span>}
                <li className="nav-item">
                  <Link className="nav-link" to="/provider/list">
                    ListProv
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/provider/posts">
                    Add Post
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={logoutUser}>
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
