import React from "react";
import "./FooterNav.scss";

import { Link, animateScroll as scroll } from "react-scroll";
import {Link as LinkRoute} from "react-router-dom";

export const FooterNav = () => {
  return (
    <nav className="Footer-Nav">
      <Link
        to="Header"
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
        className="Footer-Nav-Link"
      >
        Препарат
      </Link>

      <Link
        to="DosageUsage"
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
        className="Footer-Nav-Link"
      >
        Применение/дозировка
      </Link>

      <Link
        to="EatJournal"
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
        className="Footer-Nav-Link"
      >
        Пищевой дневник
      </Link>

      <Link
        to="Pubclications"
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
        className="Footer-Nav-Link"
      >
        Полезные материалы
      </Link>
      <LinkRoute
        to="/"
        className="Footer-Nav-Link"
      >
        Главная
      </LinkRoute>
    </nav>
  );
};
