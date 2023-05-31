import React from "react";
import { useState } from "react";
import "./NavToggle.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavDropMobile } from "./NavDropMobile";
import {Link as LinkRoute} from "react-router-dom"

export const NavToggle = (
{
Mobilehref="#",
ToggleBuyButton="Toggle-Menu-Item",
NavDropMobileStatus="NavMobile",
NavDropMobileButtonText="#",
NavDropMobileDropText1="#",
NavDropMobileDropLink1="#",
NavDropMobileDropText2="#",
NavDropMobileDropLink2="#",
NavDropMobileDropText3="#",
NavDropMobileDropLink3="#",
NavDropMobileDropText4="#",
NavDropMobileDropLink4="#",
RouteLink1,
RouteText1,
MainNav,
MainLink,

}  
) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="Nav-Toggle-Container">
      <div className="Toggle-Button-Container">
        <button
          className={open ? "Nav-Toggle-Button active" : "Nav-Toggle-Button"}
          onClick={handleOpen}
        >
          1
        </button>
      </div>
      {open ? (
        <ul className="Toggle-Menu">
          <Link
            to="Medication"
            smooth={true}
            offset={-70}
            duration={600}
            className="Toggle-Menu-Item"
          >
            <NavDropMobile 
            buttonText={NavDropMobileButtonText}
            droptext={NavDropMobileDropText1}
            href1={NavDropMobileDropLink1}
            droptext2={NavDropMobileDropText2}
            href2={NavDropMobileDropLink2}
            droptext3={NavDropMobileDropText3}
            href3={NavDropMobileDropLink3}
            droptext4={NavDropMobileDropText4}
            href4={NavDropMobileDropLink4}
            NavMobileStatus={NavDropMobileStatus}
            
            />
          </Link>

          <a
            href={Mobilehref}
            className={ToggleBuyButton}
            target="blank"
          >
            Где купить?
          </a>
          <LinkRoute
            onClick={handleOpen}
            to={MainLink}
            className="Toggle-Menu-Item"
          >
            {MainNav}
          </LinkRoute>

          <LinkRoute
            onClick={handleOpen}
            to={RouteLink1}
            className="Toggle-Menu-Item"
          >
             {RouteText1}
          </LinkRoute>
          <Link
            onClick={handleOpen}
            to="Footer"
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            className="Toggle-Menu-Item"
          >
            Контакты
          </Link>
        </ul>
      ) : null}
    </div>
  );
};
