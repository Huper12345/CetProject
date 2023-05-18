import React from "react";
import "./LogoBorimed.scss";
import LogoFooter from "./Images/logoBorimed.png";

export const LogoBorimed = () => {
  return (
    <div className="Logo-Borimed">
      <a
        target="blank"
        className="Logo-Borimed-Link"
        href="https://borimed.com/"
      >
        <img
          src={LogoFooter}
          alt="Logo-Borimed"
          className="Logo-Borimed-Img"
          height="43px"
          width="230px"
        ></img>
      </a>
    </div>
  );
};
