import React from "react";
import { useState } from "react";
import "./NavToggle.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavDropMobile } from "../NavDropMobile/NavDropMobile";

export const NavToggle = () => {
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
            buttonText="Препарат"
            droptext="Применение/дозировка"
            href1='DosageUsage'
            droptext2="Пищевой дневник"
            href2='EatJournal'
            droptext3="Вопросы"
            href3='Questions'
            droptext4="Полезные материалы"
            href4="Publications"
            
            />
          </Link>

          <a
            href="https://tabletka.by/result?ls=21024"
            className="Toggle-Menu-Item"
            target="blank"
          >
            {" "}
            Где купить?
          </a>
          <Link
            onClick={handleOpen}
            to="/"
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            className="Toggle-Menu-Item"
          >
            Главная
          </Link>
          <Link
            onClick={handleOpen}
            to="/"
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
