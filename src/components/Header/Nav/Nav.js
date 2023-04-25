import './Nav.scss';
import { Link, animateScroll as scroll } from 'react-scroll';


export const Nav = ({
href1="#", 
href2="#", 
href3="#",
text1 ="",
text2 ="",
text3="",

}) => {
    return (
        <div className='Nav'>
            <div className="Nav-container">
                <Link
                to={href1}
                smooth={true}
                offset={-70}
                duration={600}
                className="Nav-link"
                >
                {text1}
                </Link>
                <Link
                to={href2}
                smooth={true}
                offset={-70}
                duration={600}
                className="Nav-link"
                >
                {text2}
                </Link>
                <Link
                to={href3}
                smooth={true}
                offset={-70}
                duration={600}
                className="Nav-link"
                >
                {text3}
                </Link>
            </div>
        </div>
    );
};