import "./CetDrops.scss";
import { Header } from "../../components/Header";
import { Intro } from "../../components/Intro";
import { LekItemTab } from "../../helpers/components/LekItemTab";
import { IntroImage } from "../../helpers/components/IntroImage";
import { Title } from "../../helpers/Title";
import { EatJournal } from "../../helpers/components/EatJournal";
import { Questions } from "../../helpers/components/Questions";
import { DosageUsage } from "../../helpers/components/DosageUsage";
import { Footer } from "../../components/Footer";
import { Publications } from "../../components/Publications";
import { TopButton } from "../../helpers/components/TopButton";
import Zaec from "../../helpers/Images/Intro/zaec.webp"
import DropsPack from "../../helpers/Images/Packs/kaplip15.webp"
import BabyMarker from "../../helpers/Images/Markers/baby-boy1.webp"
import DropsMarker from "../../helpers/Images/Markers/water-drop.webp"
import FoodDiaryTab from "../../helpers/Files/Food-diary.pdf"



export const CetDrops = () => {
    return (
        <div className="CetDrops">
            <Header
            BuyButtonStatus="Nav-link"
            BuyButtonHref="https://tabletka.by/result?ls=20070"
            MobileBuyLink="https://tabletka.by/result?ls=20070"
            ToggleBuyButton="Toggle-Menu-Item"
            NavDropMobileStatus="NavMobile"
            NavDropStatus="NavDrop"
            NavRouteText1="Главная"
            NavRouteLink1="/"
            MainNav="Таблетки"
            MainLink="/Tablets"
            />
            <TopButton />
            <Intro 
            className="Intro-Inner-Tab"
            className2="Intro Tab"
            >
            <IntroImage 
            Image={Zaec}
            alt="Zaec"
            BubleText="Про таблетки вам расскажет медведь. Капли для меня." />
             <LekItemTab 
                Img={DropsPack}
                marker1={BabyMarker}
                LekText1="С 6 месяцев"
                marker2={DropsMarker}
                LekText2="Капли"
                buttonText1="Высокая эффективность и безопасность"
                dropText1="Цетиризин широко используется в детской практике, в том числе у пациентов младшего возраста (6 месяцев до 2 лет) из группы повышенного риска формирования бронхиальной астмы."
                buttonText2="Удобная лекарственная форма"
                dropText2="Капли для приёма внутрь наиболее удобная лекарственная форма  для применения в детской практике."
                /> 
        
            </Intro>
            <DosageUsage 
            MainText="Лекарственный препарат «Цетиризин» капли в дозировке 10 мг/мл предназначен для применения у взрослых и детей с 6 месяцев и старше для облегчения:"
            subtext1="Симптомов сезонного и постоянного аллергического ринита и конъюктивита"
            subtext2="Гипермии хронической идиопатической крапивницы"
            href="https://www.rceth.by/NDfiles/instr/19_07_2952_s.pdf"
            />
            <div className="section">
                <div className="container">
                    <Title TitleText="Пищевой дневник" />
                    <EatJournal FoodDiary={FoodDiaryTab} />
                </div>
            </div>
            <Questions 
            Usage="Дети 2-5 лет

            Рекомендуемая доза составляет 2,5 мг (6 капель) два раза в день.
            
            Дети от 1 года до 2 лет
            
            Рекомендуемая доза составляет 2,5 мг (6 капель) один или два раза в день.
            
            Дети от 6 месяцев до 1 года
            
            Рекомендуемая доза составляет 2,5 мг (6 капель) один раз в день.
            
            Максимальная продолжительность лечения у детей с сезонным ринитом не должна превышать 4 недели."
            />
            <Publications />
            <Footer 
            InstructionLink="https://www.rceth.by/NDfiles/instr/19_07_2952_s.pdf"
            Navhref1="Intro"
            Navtext1="Препарат"
            Navhref2="DosageUsage"
            Navtext2="Применение/дозировка"
            Navhref3="EatJournal"
            Navtext3="Пищевой дневник"
            Navhref4="Pubclications"
            Navtext4="Полезные материалы"
            Navroutelink1="/"
            Navroutetext1="Главная"
            Navroutelink2="/Tablets"
            Navroutetext2="Цетиризин таблетки"
            />
        </div>
    );
};