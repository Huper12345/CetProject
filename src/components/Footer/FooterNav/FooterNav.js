import React from "react";
import "./FooterNav.scss";

import { Link, animateScroll as scroll } from "react-scroll";
import {Link as LinkRoute} from "react-router-dom";

export const FooterNav = (
  {
  href1,
  text1,
  href2,
  text2,
  href3,
  text3,
  href4,
  text4,
  routelink1,
  routetext1,
  routelink2,
  routetext2,
  routelink3,
  routetext3,
  }
) => {
  return (
    <nav className="Footer-Nav">
      <Link
        to={href1}
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
        className="Footer-Nav-Link"
      >
        {text1}
      </Link>

      <Link
        to={href2}
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
        className="Footer-Nav-Link"
      >
        {text2}
      </Link>

      <Link
        to={href3}
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
        className="Footer-Nav-Link"
      >
        {text3}
      </Link>

      <Link
        to={href4}
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
        className="Footer-Nav-Link"
      >
        {text4}
      </Link>
      <LinkRoute
        to={routelink1}
        className="Footer-Nav-Link"
      >
        {routetext1}
      </LinkRoute>

      <LinkRoute
        to={routelink2}
        className="Footer-Nav-Link"
      >
        {routetext2}
      </LinkRoute>

      <LinkRoute
        to={routelink3}
        className="Footer-Nav-Link"
      >
        {routetext3}
      </LinkRoute>
    </nav>
  );
};
