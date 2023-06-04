import "./NotFoundPage.scss"
import MishkaZayka from "../../helpers/Images/Intro/mishkaz.webp"
import { LinkButton } from "../../helpers/components/LinkButton";



export const NotFoundPage = () => {
    return (
        <div className="NotFoundPage">
            <div className="container">
                <div className="NotFoundPage-Inner">
                    <h2 className="NotFound-Title">Упс... Такой страницы не существует</h2>
                    <img className="NotFound-Image" alt="NotFound" src={MishkaZayka}></img>
                    <LinkButton linkWay="/" className="LinkButton Yellow" ButtonText="На главную" />
                </div>
            </div>
        </div>
    )
};