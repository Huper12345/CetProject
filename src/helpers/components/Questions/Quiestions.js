import "./Questions.scss"
import { Title } from "../../Title";
import { Advantages } from "../Advantages";
import { DoctorQuestion } from "../DoctorQuestion";

export const Questions = ({
    Usage, 
    Usage2, 
    Usage3, 
    Usage4, 
    Usage5, 
    Usage6,
    UsageAdd1,
    UsageAdd2,
    UsageAdd3,
    UsageAdd4,
    UsageAdd5,
}) => {
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
                        droptext="Цетиризин это противоаллергический препарат нового поколения"
                        />
                         <Advantages 
                        buttonText="Как принимать цетиризин?"
                        subtext1={Usage}
                        subtext2={Usage3}
                        subtext3={Usage4}
                        subtext4={Usage5}
                        subtext5={Usage6}
                        addtext1={UsageAdd1}
                        addtext2={UsageAdd2}
                        addtext3={UsageAdd3}
                        addtext4={UsageAdd4}
                        addtext5={UsageAdd5}
                        />
                         <Advantages 
                        buttonText="Как выбрать лекарственную форму?"
                        droptext="Рекомендуем выбирать лекарственную форму в зависимости от возраста пациента."
                        addtext1="Для детей от 6 месяцев до 5 лет"
                        subtext1=" - Капли."
                        addtext2="С 6 лет"
                        subtext2=" - Таблетки."
                        subtext3="Перед применением обязательно проконсультируйтесь с врачом"
                        />
                         <Advantages 
                        buttonText="Через сколько начинает действовать Цетиризин?"
                        droptext="Цетиризин начинает действовать в период от 30 минут после приема внутрь."
                        subtext1="Продолжительность действия сохраняется до 24 часов."
                        />
                        <Advantages 
                        buttonText="Можно ли пить Цетиризин с алкоголем?"
                        addtext1="Рекомендовано соблюдать осторожность при применении Цетиризина одновременно с алкоголем"
                        subtext1=" так как, применение препарата одновременно со спиртным может способствовать дальнейшему снижению скорости реакции и концентрации внимания."
                        subtext2="Поэтому в период когда вы принимаете лекарственный препарат Цетиризин не стоит принимать алкоголь."
                        />
                          <Advantages 
                        buttonText="Принимать Цетиризин до или после еды?"
                        droptext="Прием пищи не оказывает существенного влияния на полноту всасывания Цетиризина в кишечнике, но может слегка замедлить этот процесс.
                        "
                        subtext1="Поэтому принять Цетиризин можно внутрь независимо от приема пищи."
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