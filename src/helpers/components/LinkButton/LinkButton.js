import "./LinkButton.scss"
import { Link } from "react-router-dom";


export const LinkButton = ({ButtonText, linkWay}) => {
    return(
        <Link 
        className="LinkButton"
        to={linkWay}
        >
            {ButtonText}
        </Link>
    );
};