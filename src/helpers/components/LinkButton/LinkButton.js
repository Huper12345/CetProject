import "./LinkButton.scss"
import { Link } from "react-router-dom";

export const LinkButton = ({ButtonText, linkWay}) => {
    
    const scrollTop = () => {
        window.scrollTo(0, 0);
    }
    
    return(
        <Link onClick={scrollTop}
        className="LinkButton"
        to={linkWay}
        preventScrollReset="true"
        >
            {ButtonText}
        </Link>
    );
};