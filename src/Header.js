import React from "react";
import "./Header.css";
import logo from "./websitelogo.png";
import profilepic from "./profilepic.png";

const Header = () => {
    return (
        <div className="header">

            <div className="headerContent">

                <div className="headerLeft">
                    <img src={logo} className="headerLogo"/>
                    <h2>HOW MANY MOUNTAINS?</h2>
                </div>

                <img src={profilepic} className="headerProfilePic"/>

            </div>


        </div>
    );
};

export default Header;