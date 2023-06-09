import "./EatJournalRools.scss"
import Calendar from "./Images/1.png"
import Diary from "./Images/2.png"
import Clock from "./Images/3.png"
import CheckIcon from "./Images/ckeckicon.png"
import CrossIcon from  "./Images/cross.png";
import { Header } from "../../components/Header";
import { Title } from "../../helpers/Title";
import { PreviousButton } from "../../helpers/components/PreviousButton"
import { Footer } from "../../components/Footer"
import { createRef } from "react"
import { TopButton } from "../../helpers/components/TopButton"


export const EatJournalRools = () => {
    const refComponent = createRef();
    
    return(
        <div className="EatJournalRools">
            <Header 
            MainNav="Главная"
            MainLink="/"
            />
            <div className="container">
                <div id="Eat-Roolls-Wrapper" className="Eat-Rools-Wrapper">
                    <PreviousButton />
                    <Title TitleText="Правила ведения дневника" />
                    <div className="Rools-Item">
                        <img alt="Calendar" src={Calendar} className="Rools-Img"></img>
                        <div className="Rools-Text">Обязательно отмечать в дневнике дату и время всех приёмов пищи, перечень продуктов с указанием реакций, которые последовали после приёма пищи,длительность и интенсивность проявлений этих реакций, записывать, в какое время суток и какие лекарства применялись; для мазей и лекарственных кремов указывать расход и место нанесения. 
                        </div>
                    </div>{/*Rools-Item */}

                    <div className="Rools-Item">
                        <img alt="Calendar" src={Diary} className="Rools-Img"></img>
                        <div className="Rools-Text">Вести Пищевой дневник подробно и постоянно, не упуская ни кусочка съеденной даже случайно пищи. Даже малые количества продуктов, вызывающих аллергию, могут полностью перечеркнуть усилия нескольких месяцев. Организму требуется не менее 3 недель для восстановления после аллергической реакции.
                        </div>
                    </div>{/*Rools-Item */}

                    <div className="Rools-Item">
                        <img alt="Calendar" src={Clock} className="Rools-Img"></img>
                        <div className="Rools-Text">Пищевой дневник следует непременно вести в течение 2-4 недель перед началом диетотерапии, которую назначит врач на основании этих записей. После начала лечения продолжать вести Пищевой дневник так же чётко и подробно. 
                        </div>
                    </div>{/*Rools-Item */}
                    <Title TitleText="Рацион питания" />
                    
                    <div 
                    ref={refComponent} 
                    className="Rools-Food-Content"
                    >

                        <div className="Rools-Food-Wrapper">
                            <div className="Rools-Food-Item">
                                <img className="Rools-Food-Img" alt="checkpicture" src={CheckIcon}></img>
                                <div className="Rools-Food-Text">Отварная говядина</div>
                            </div>{/*Rools-Food-Item */}
                            <div className="Rools-Food-Item">
                                <img className="Rools-Food-Img" alt="checkpicture" src={CheckIcon}></img>
                                <div className="Rools-Food-Text">Крупяные и овощные супы </div>
                            </div>{/*Rools-Food-Item */}
                            <div className="Rools-Food-Item">
                                <img className="Rools-Food-Img" alt="checkpicture" src={CheckIcon}></img>
                                <div className="Rools-Food-Text">Масло: подсолнечное, сливочное, оливковое</div>
                            </div>{/*Rools-Food-Item */}
                            <div className="Rools-Food-Item">
                                <img className="Rools-Food-Img" alt="checkpicture" src={CheckIcon}></img>
                                <div className="Rools-Food-Text">Отварной картофель</div>
                            </div>{/*Rools-Food-Item */}
                            <div className="Rools-Food-Item">
                                <img className="Rools-Food-Img" alt="checkpicture" src={CheckIcon}></img>
                                <div className="Rools-Food-Text">Геркулесовая, рисовая, гречневая каша </div>
                            </div>{/*Rools-Food-Item */}
                            <div className="Rools-Food-Item">
                                <img className="Rools-Food-Img" alt="checkpicture" src={CheckIcon}></img>
                                <div className="Rools-Food-Text">Свежие огурцы</div>
                            </div>{/*Rools-Food-Item */}
                            <div className="Rools-Food-Item">
                                <img className="Rools-Food-Img" alt="checkpicture" src={CheckIcon}></img>
                                <div className="Rools-Food-Text">Укроп, петрушка</div>
                            </div>{/*Rools-Food-Item */}
                            <div className="Rools-Food-Item">
                                <img className="Rools-Food-Img" alt="checkpicture" src={CheckIcon}></img>
                                <div className="Rools-Food-Text">Чай</div>
                            </div>{/*Rools-Food-Item */}
                            <div className="Rools-Food-Item">
                                <img className="Rools-Food-Img" alt="checkpicture" src={CheckIcon}></img>
                                <div className="Rools-Food-Text">Печёные яблоки, арбуз</div>
                            </div>{/*Rools-Food-Item */}
                            <div className="Rools-Food-Item">
                                <img className="Rools-Food-Img" alt="checkpicture" src={CheckIcon}></img>
                                <div className="Rools-Food-Text">Яблочные, смородиновые, вишнёвые компоты</div>
                            </div>{/*Rools-Food-Item */}
                            <div className="Rools-Food-Item">
                                <img className="Rools-Food-Img" alt="checkpicture" src={CheckIcon}></img>
                                <div className="Rools-Food-Text">Сахар</div>
                            </div>{/*Rools-Food-Item */}


                        </div>{/*Rools-Food-Wrapper */}

                        <div className="Rools-Food-Wrapper">
                            <div className="Rools-Food-Item">
                                <img className="Rools-Food-Img" alt="crosspicture" src={CrossIcon}></img>
                                <div className="Rools-Food-Text">Орехи</div>
                            </div>{/*Rools-Food-Item */}
                            <div className="Rools-Food-Item">
                                <img className="Rools-Food-Img" alt="crosspicture" src={CrossIcon}></img>
                                <div className="Rools-Food-Text">Цитрусовые</div>
                            </div>{/*Rools-Food-Item */}
                            <div className="Rools-Food-Item">
                                <img className="Rools-Food-Img" alt="crosspicture" src={CrossIcon}></img>
                                <div className="Rools-Food-Text">Птица</div>
                            </div>{/*Rools-Food-Item */}
                            <div className="Rools-Food-Item">
                                <img className="Rools-Food-Img" alt="crosspicture" src={CrossIcon}></img>
                                <div className="Rools-Food-Text">Рыба и рыбные блюда</div>
                            </div>{/*Rools-Food-Item */}
                            <div className="Rools-Food-Item">
                                <img className="Rools-Food-Img" alt="crosspicture" src={CrossIcon}></img>
                                <div className="Rools-Food-Text">Кофе</div>
                            </div>{/*Rools-Food-Item */}
                            <div className="Rools-Food-Item">
                                <img className="Rools-Food-Img" alt="crosspicture" src={CrossIcon}></img>
                                <div className="Rools-Food-Text">Шоколад и изделия из него</div>
                            </div>{/*Rools-Food-Item */}
                            <div className="Rools-Food-Item">
                                <img className="Rools-Food-Img" alt="crosspicture" src={CrossIcon}></img>
                                <div className="Rools-Food-Text">Майонез, уксус, горчица, специи</div>
                            </div>{/*Rools-Food-Item */}
                            <div className="Rools-Food-Item">
                                <img className="Rools-Food-Img" alt="crosspicture" src={CrossIcon}></img>
                                <div className="Rools-Food-Text">Копчёные продукты</div>
                            </div>{/*Rools-Food-Item */}
                            <div className="Rools-Food-Item">
                                <img className="Rools-Food-Img" alt="crosspicture" src={CrossIcon}></img>
                                <div className="Rools-Food-Text">Грибы, Баклажаны, томаты</div>
                            </div>{/*Rools-Food-Item */}
                            <div className="Rools-Food-Item">
                                <img className="Rools-Food-Img" alt="crosspicture" src={CrossIcon}></img>
                                <div className="Rools-Food-Text">Яйца, cдобное тесто</div>
                            </div>{/*Rools-Food-Item */}
                            <div className="Rools-Food-Item">
                                <img className="Rools-Food-Img" alt="crosspicture" src={CrossIcon}></img>
                                <div className="Rools-Food-Text">Земляника, клубника, ананас, дыня, мёд</div>
                            </div>{/*Rools-Food-Item */}

                        </div>{/*Rools-Food-Wrapper */}
                    </div>

                    <div className="EatJournal-Attention">Перед выбором рациона питания настоятельно рекомендуем проконсультироваться с врачом!</div>
                </div>
            </div>
            <TopButton 
            refComponent={refComponent} 
            linkWay="Eat-Rools-Wrapper"
            />
            <Footer
            InstructionButtonStatus="Instruction-Button Hide" 
            Navroutelink1="/"
            Navroutetext1="Главная"
            Navroutelink2="/Tablets"
            Navroutetext2="Цетиризин таблетки"
            Navroutelink3="/Drops"
            Navroutetext3="Цетиризин капли"
            />
        </div>
    );
};