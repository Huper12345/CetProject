import "./LinkButton.scss"
import { Link } from "react-router-dom";

export const LinkButton = ({ButtonText, linkWay, className="LinkButton"}) => {
    
  
    return(
        <Link 
        className={className}
        to={linkWay}
        >
            {ButtonText}
        </Link>
    );
};