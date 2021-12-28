import React from "react";
import { Link } from "react-router-dom";
import { RiVirusFill } from "react-icons/ri";
import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <nav className="nav">
        <div className="web-title">
          <span>
            <RiVirusFill />{" "}
          </span>
          <h1> CovidOmeter </h1>
          <span>
            <RiVirusFill />{" "}
          </span>
        </div>
        <div className="list-wrapper">
          <ul>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
