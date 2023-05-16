import "./PreviousButton.scss"
import { Link, useNavigate } from "react-router-dom";

export const PreviousButton = () => {
    
    const navigate = useNavigate();

    const goBack = () => navigate(-1);
    
    return(
        <Link
        className="PreviousButton"
        onClick={goBack}
        >
            Назад
        </Link>
    );
};