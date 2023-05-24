import "./Questions.scss"
import { Title } from "../../Title";
import { Advantages } from "../Advantages";
import { DoctorQuestion } from "../DoctorQuestion";

export const Questions = () => {
    return(
        <div className="Questions">
            <div className="section">
                <div className="container">
                    <Title 
                    TitleText="Часто задаваемые вопросы" 
                    TitleColor="Title-Text yellow" />
                    <div className="Questions-inner">
                        <div className="Questions-Content">
                        <Advantages 
                        buttonText="Что такое цетиризин?"
                        droptext="Цетиризин это препарат нового поколения против аллергии"
                        />
                         <Advantages 
                        buttonText="Как принимать цетиризин?"
                        droptext="Цетиризин это препарат нового поколения против аллергии"
                        />
                         <Advantages 
                        buttonText="Какую выбрать лекарственную форму?"
                        droptext="Цетиризин это препарат нового поколения против аллергии"
                        />
                        <div className="Doctor-Question-Container">
                            <DoctorQuestion />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};