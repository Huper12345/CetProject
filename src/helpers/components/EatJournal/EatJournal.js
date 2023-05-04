import "./EatJournal.scss"
import FoodJ from "./Images/foodJournal5.png"
import { SendMail } from "./SendMail";



export const EatJournal = ({FoodDiary}) => {
    return(
        <div className="EatJournal">
                <div className="EatJournal-Inner">
                    <div className="EatJournal-Content">
                        <h3 className="EatJournal-Title">
                        Пищевой дневник – удобный инструмент для консультации со специалистом и обмена опыта с другими мамами.
                        </h3>
                        <div className="EatJournal-Download">
                            <a href={FoodDiary} target="blank" className="EatJournal-Button">Открыть дневник</a>
                        </div>
                        <SendMail />
                    </div>
                    <div className="EatJournal-Img-Wrapper">
                        <img className="EatJournal-Img" alt="EatJournal" src={FoodJ}></img>
                    </div>
                </div>
        </div>
    );
};