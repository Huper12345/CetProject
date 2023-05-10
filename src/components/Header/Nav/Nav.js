import './Nav.scss';
import { Link, animateScroll as scroll } from 'react-scroll';
import {Link as LinkRoute } from "react-router-dom";


export const Nav = ({
main="#", 
href2="#", 
href3="#",
hrefBuy="#",
mainText ="",
text2 ="",
text3="",
BuyButton="Nav-link Hide",

}) => {
    return (
        <div className='Nav'>
            <div className="Nav-container">
                <LinkRoute
                to={main} 
                className="Nav-link"
                >
                {mainText}
                </LinkRoute>

                <Link
                to={href2}
                smooth={true}
                offset={-70}
                duration={600}
                className="Nav-link"
                >
                {text2}
                </Link>
                                
                <a 
                className={BuyButton}
                href={hrefBuy}
                target="blank"
                >
                Где купить?
                </a>
            </div>
        </div>
    );
};