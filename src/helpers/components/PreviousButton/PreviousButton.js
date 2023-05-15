import "./PreviousButton.scss"
import { Link } from "react-router-dom";

export const PreviousButton = ({linkWay}) => {
    return(
        <Link
        className="PreviousButton"
        to={linkWay}
        preventScrollReset={true}
        >
            Назад
        </Link>
    );
};