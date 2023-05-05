import "./EatJournalRools.scss"
import Calendar from "./Images/1.png"


export const EatJournalRools = () => {
    return(
        <div className="Rools-Wrapper">
            <h3 className="Rools-Title">Правила ведения дневника</h3>
            <div className="Rools-Item">
                <img alt="Calendar" src={Calendar} className="Rools-Img"></img>
                <div className="Rools-Text">Срок ведения дневника определите вместе со специалистом по лечению аллергии.</div>
            </div>
        </div>
    );
};