import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import images from "../../Image.js";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img
          id={images[0].id}
          src={images[0].img}
          width="30"
          height="30"
          alt={images[0].name}
        />
      </Link>

      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#collapse_target"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapse_target">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/search"
              className={
                window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Saved"
              className={
                window.location.pathname === "/saved"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
