import "./EatJournal.scss"
import FoodJ from "./Images/foodJournal5.png"



export const EatJournal = () => {
    return(
        <div className="EatJournal">
                <div className="EatJournal-Inner">
                    <div className="EatJournal-Content">
                        <h3 className="EatJournal-Title">
                        Пищевой дневник – удобный инструмент для консультации со специалистом и обмена опыта с другими мамами.
                        </h3>
                        <div className="EatJournal-Download">
                            <button className="EatJournal-Button">Открыть дневник</button>
                        </div>
                    </div>
                    <div className="EatJournal-Img-Wrapper">
                        <img className="EatJournal-Img" alt="EatJournal" src={FoodJ}></img>
                    </div>
                </div>
        </div>
    );
};