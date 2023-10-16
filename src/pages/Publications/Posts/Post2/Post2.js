import "../Post.scss"
import { Header } from "../../../../components/Header";
import { PreviousButton } from "../../../../helpers/components/PreviousButton";
import Post2Image from "../../../../helpers/Images/Posts/post2.webp"
import {Title} from "../../../../helpers/Title"
import { Footer } from "../../../../components/Footer";
import { TopButton } from "../../../../helpers/components/TopButton";
import { createRef } from "react";


export const Post2 = () => {
    
    const refComponent = createRef();
    
    return(
        <div className="Post">
            <Header 
            MainNav="Главная"
            MainLink="/"
            />
            <div className="container">
                <div id="Post-Wrapper-2" className="Post-Wrapper">
                    <PreviousButton />
                    <div className="Post-Content">
                    <Title TitleText="Как облегчить аллергию весной?" />
                    <img className="Post-Image" alt="Первые симптомы аллергии" src={Post2Image}></img>
                    <div ref={refComponent} className="Post-Text">

                    Для многих людей весенние солнечные дни омрачаются чиханьем, кашлем, покраснением глаз и насморком. От сезонной аллергии страдает 40% взрослого населения, а пик обострений приходится именно на весенний период. Всплеск заболеваемости отмечается в конце апреля и в начале мая, именно в это время начинают цвести деревья и кустарники.

                    <p className="Post-Paragraph">Как распознать сезонную аллергию?</p>

                    Аллергия – это ответная реакция организма на раздражающие факторы. При попадании аллергенов в организм главная задача иммунной системы уничтожить антигены, и она начинает усиленно с ними бороться, в результате вырабатывается белок гистамин, который является виновником всех неприятных симптомов аллергии.

                    <p className="Post-Paragraph-Text">
                    Основными аллергенами считаются химические вещества, лекарственные и растительные препараты, пищевые продукты, пыль, пух, плесень и пыльца. В зависимости от вида антигена проявляются разные симптомы и подбирается индивидуальное лечение.
                    </p>
                    </div>
                    </div>
                </div>
            </div>
            <TopButton 
            refComponent={refComponent} 
            linkWay="Post-Wrapper-2"
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