import React from "react"
import { useState } from "react";
import "./Advantages.scss";
import { PlusIcon } from "./PlusIcon";


export const Advantages = ({
  buttonText, 
  droptext, 
  subtext1,
  subtext2, 
  subtext3, 
  subtext4, 
  subtext5, 
  addtext1,
  addtext2,
  addtext3,
  addtext4,
  addtext5,
  Style="Advantages-Button"}) => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
  

    return (
      <div className="Advantages">
        <button
          className={open ? 'Advantages-Button active' : Style}
          onClick={handleOpen}
        ><PlusIcon classIcon={open ? 'Plus-Icon active' : 'Plus-Icon'} /> {buttonText}
        </button>
        {open ? (
          <ul className="Dropdown-Menu">
            <li className="Drop-Menu-Item">
              <h3 className="Drop-Menu-Text">{droptext}
              <p className="Advantages-Menu-Subtext"><i className="Advantages-Menu-AdditionalText">{addtext1}</i>{subtext1}</p>
              <p className="Advantages-Menu-Subtext"><i className="Advantages-Menu-AdditionalText">{addtext2}</i>{subtext2}</p>
              <p className="Advantages-Menu-Subtext"><i className="Advantages-Menu-AdditionalText">{addtext3}</i>{subtext3}</p>
              <p className="Advantages-Menu-Subtext"><i className="Advantages-Menu-AdditionalText">{addtext4}</i>{subtext4}</p>
              <p className="Advantages-Menu-Subtext"><i className="Advantages-Menu-AdditionalText">{addtext5}</i>{subtext5}</p>
              </h3>
            </li>
          </ul>
        ) : null}
      </div>
    );
  };