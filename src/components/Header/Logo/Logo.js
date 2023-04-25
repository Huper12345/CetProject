import React from "react";
import "./Logo.scss";
import LogoT from "../../../helpers/Images/Logo/logoCET2.webp";
import { Link, animateScroll as scroll } from "react-scroll";


export const Logo = () => {
  return (
    <div className="Logo">
      <Link
        className="Logo-Link"
        smooth={true}
        offset={-70}
        duration={600}
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
