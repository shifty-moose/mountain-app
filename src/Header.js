import React from "react";
import "./Header.css";
import logo from "./websitelogo.png";

const Header = () => {
    return (
        <div className="header">

        <img src={logo} className="headerLogo"/>

        </div>
    );
};

export default Header;