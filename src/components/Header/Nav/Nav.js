import './Nav.scss';
import { Link, animateScroll as scroll } from 'react-scroll';
import {Link as LinkRoute } from "react-router-dom";


export const Nav = ({
main="#", 
href2="#", 
hrefBuy="#",
mainText ="",
text2 ="",
BuyButton="Nav-link Hide",
RouteText1,
RouteLink1,
RouteText2,
RouteLink2,

}) => {
    return (
        <div className='Nav'>
            <div className="Nav-container">
                <a 
                className={BuyButton}
                href={hrefBuy}
                target="blank"
                >
                Где купить?
                </a>
                <LinkRoute
                to={main} 
                className="Nav-link"
                >
                {mainText}
                </LinkRoute>

                <LinkRoute
                to={RouteLink1} 
                className="Nav-link"
                >
                {RouteText1}
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
            </div>
        </div>
    );
};