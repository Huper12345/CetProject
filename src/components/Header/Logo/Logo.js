import React from "react";
import "./Logo.scss";
import LogoT from "../../../helpers/Images/Logo/logoCET2.webp";
import {Link} from "react-router-dom";


export const Logo = () => {
  return (
    <div className="Logo">
      <Link
        className="Logo-Link"
        to="/"
      >
        <img
          src={LogoT}
          alt="Logo"
          className="Logo-Img"
          width="50px"
          height="50px"
        ></img>
      </Link>
    </div>
  );
};
