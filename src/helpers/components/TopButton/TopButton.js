import React from "react";
import "./TopButton.scss";
import { Link, animateScroll as scroll } from 'react-scroll';
import { useState, useEffect } from "react";



export const TopButton = ({refComponent, linkWay="Intro"}) => {
  const [visible, setVisible] = useState('');

  useEffect(() => {
 
      const introHeight = refComponent.current.getBoundingClientRect().height;
  
      const isVisible = () => {
        const scrollTop = window.scrollY;
        const visibleClass = scrollTop >= introHeight - 200 ? 'is-visible' : '';
        setVisible(visibleClass);
      };
  
    window.addEventListener('scroll', isVisible);
    return () => {
      window.removeEventListener('scroll', isVisible);
    };
  }, [refComponent]);

  const classes = `Top-Button-Wrapper ${visible}`;

  return (
    <Link 
    className={classes}
    to={linkWay}
    smooth={true}
    offset={-70}
    duration={600}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="Top-Button"
        viewBox="0 0 24 24"
        strokeWidth={1}
      >
        <path
          d="M15.21,9.79l-2.5-2.5a1,1,0,0,0-1.42,0l-2.5,2.5a1,1,0,0,0,1.42,1.42l.79-.8V16a1,1,0,0,0,2,0V10.41l.79.8a1,1,0,0,0,1.42,0A1,1,0,0,0,15.21,9.79Z"
        />
      </svg>
    </Link>
  );
};
