import React from "react"
import { useState } from "react";
import { Link } from "react-scroll";
import "./NavDropMobile.scss";


export const NavDropMobile = ({
  buttonText,
  droptext,
  href1, 
  droptext2,
  href2,
  droptext3,
  href3,
  droptext4, 
  href4,
  NavMobileStatus="NavMobile",
  Style="NavMobile-Button"}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  

    return (
      <div className={NavMobileStatus}>
        <button
          className={open ? 'NavMobile-Button active' : Style}
          onClick={handleOpen}
        >{buttonText}
        </button>
        {open ? (
          <ul className="Mobile-Dropdown-Menu">
            <li className="Mobile-Menu-Item">
              <Link
              to={href1} 
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              className="Mobile-Menu-Text"
              onClick={handleClose}
              >{droptext}</Link>
            </li>
            <li className="Mobile-Menu-Item">
              <Link 
              className="Mobile-Menu-Text"
              to={href2} 
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              onClick={handleClose}
              >
                {droptext2}
              </Link>
            </li>
            <li className="Mobile-Menu-Item">
            <Link 
              className="Mobile-Menu-Text"
              to={href3} 
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              onClick={handleClose}
              >
                {droptext3}
              </Link>
            </li>
            <li className="Mobile-Menu-Item">
            <Link 
              className="Mobile-Menu-Text"
              to={href4} 
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              onClick={handleClose}
              >
                {droptext4}
              </Link>
            </li>
          </ul>
        ) : null}
      </div>
    );
  };