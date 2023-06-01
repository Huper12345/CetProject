import React from "react";
import "./Logo.scss";
import LogoT from "../../../helpers/Images/Logo/logoCET3.webp";
import {Link} from "react-router-dom";


export const Logo = () => {
  return (
    <div className="Logo" id="Logo">
      <Link
        className="Logo-Link"
        to="/"
      >
        <div className="Logo-Link-Inner">
          <img
            src={LogoT}
            alt="Logo"
            className="Logo-Img"
            width="50px"
            height="50px"
          ></img>
          <div className="Logo-Text">
            <p className="Logo-Text-Title">Цетиризин</p>
            <p className="Logo-Text-Subtext">Borimed</p> 
          </div>
        </div>
      </Link>
    </div>
  );
};
