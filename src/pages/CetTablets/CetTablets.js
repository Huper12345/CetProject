import "./CetTablets.scss";
import { Header } from "../../components/Header";
import { Intro } from "../../components/Intro";
import { LekItemTab } from "../../helpers/components/LekItemTab";
import { IntroImage } from "../../helpers/components/IntroImage";
import { EatJournal } from "../../helpers/components/EatJournal";
import TabPack2 from "../../helpers/Images/Packs/Tab9.webp"
import ChildMarker from "../../helpers/Images/Markers/age.webp"
import pills from "../../helpers/Images/Markers/pills.webp"
import Mishka from "../../helpers/Images/Intro/devushka.webp"
import { Title } from "../../helpers/Title";
import { Questions } from "../../helpers/components/Questions";
import FoodDiaryTab from "../../helpers/Files/Food-diary.pdf";
import { DosageUsage } from "../../helpers/components/DosageUsage";
import { Publications } from "../../components/Publications";
import { Footer } from "../../components/Footer";

export const CetTablets = () => {
    return (
        <div className="CetTablets">
            <Header 
            BuyButtonStatus="Nav-link"
            BuyButtonHref="https://tabletka.by/result?ls=21211"
            MobileBuyLink="https://tabletka.by/result?ls=21211"
            ToggleBuyButton="Toggle-Menu-Item"
            NavDropMobileStatus="NavMobile"
            NavDropStatus="NavDrop"
            NavRouteText1="Главная"
            NavRouteLink1="/"
            MainNav="Капли"
            MainLink="/Drops"
            />
            <Intro 
            className="Intro-Inner-Tab"
            className2="Intro Tab">
                <IntroImage 
                Image={Mishka}
                alt="Mishka" 
                BubleText="Цетиризин таблетки - для взрослых и детей!"/>
                <LekItemTab 
                Img={TabPack2}
                marker1={ChildMarker}
                LekText1="С 6 лет"
                marker2={pills}
                LekText2="Таблетки"
                buttonText1="Возможность длительного применения"
                dropText1="Препарат можно использовать для вторичной профилактики аллергических заболеваний"
                buttonText2="Эталон антигистаминного препарата"
                dropText2="Значительно облегчает назальные и глазные симптомы сезонного и круглогодичного аллергического ринита, хронической идиопатической  крапивницы"
                />
            </Intro>
            <DosageUsage 
            MainText="Лекарственный препарат «Цетиризин» таблетки в дозировке 10 мг предназначен для применения у взрослых и детей с 6 лет и старше для облегчения:"
            subtext1="-Назальных и глазных симптомов круглогодичного и сезонного аллергического ринита и аллергического конъюктевита, зуда, чиханья, заложенности носа, ринореи, слезоточения, гипермии, конъюктевитов"
            subtext2="-Симптомов хронической идиопатической крапивницы"
            href="https://www.rceth.by/NDfiles/instr/20_12_3093_s.pdf"
            />
            <div className="section">
                <div className="container">
                    <Title TitleText="Пищевой дневник" />
                    <EatJournal FoodDiary={FoodDiaryTab} />
                </div>
            </div>
            <Questions 
            Usage1="Внутрь, независимо от приема пищи, запивая стаканом воды"
            UsageAdd1="Взрослые и подростки старше 12 лет:"
            Usage=" - 1 таблетка (10 мг) 1 раз в сутки."
            UsageAdd2="Дети от 6 до 12 лет:"             
            Usage3=" - 1 таблетка) один раз в день."
            UsageAdd3="Альтернативно"
            Usage4=", доза может быть разделена на два приема (половина таблетки, покрытой оболочкой, или 5 мг утром и вечером)"
            Usage5="Продолжительность лечения сезонного ринита и аллергического конъюнктивита у детей не должна превышать 4 недель."
            />
            <Publications />
            <Footer 
            InstructionLink="https://www.rceth.by/NDfiles/instr/20_12_3093_s.pdf"
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
            Navroutelink3="/Drops"
            Navroutetext3="Цетиризин капли"
            />
        </div>
    );
};