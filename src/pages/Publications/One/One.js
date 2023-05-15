import "./One.scss"
import { Header } from "../../../components/Header";
import { PreviousButton } from "../../../helpers/components/PreviousButton";


export const One = () => {
    return(
        <div className="One">
            <Header />
            <div className="container">
                <div className="One-Wrapper">
                    <PreviousButton linkWay="/Tablets"/>
                </div>
            </div>
        </div>
    );
};