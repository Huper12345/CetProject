import "./CetTablets.scss";
import { Header } from "../../components/Header";
import { Intro } from "../../components/Intro";
import { LekItemTab } from "../../helpers/components/LekItemTab";
import { IntroImage } from "../../helpers/components/IntroImage";
import { EatJournal } from "../../helpers/components/EatJournal";
import TabPack2 from "../../helpers/Images/Packs/Tab2.png"
import ChildMarker from "../../helpers/Images/Markers/son2.png"
import pills from "../../helpers/Images/Markers/pills.png"
import Mishka from "../../helpers/Images/Intro/mishka2.png"
import { Title } from "../../helpers/Title";
import { Questions } from "../../helpers/components/Questions";
import FoodDiaryTab from "../../helpers/Files/Food-diary.pdf";
import { DosageUsage } from "../../helpers/components/DosageUsage";
import { Publications } from "../../components/Publications";
import { Footer } from "../../components/Footer";
import { TopButton } from "../../helpers/components/TopButton";

export const CetTablets = () => {
    return(
        <div className="CetTablets">
            <Header 
            BuyButtonStatus="Nav-link"
            BuyButtonHref="https://tabletka.by/result?ls=21211"
            MobileBuyLink="https://tabletka.by/result?ls=21211"
            ToggleBuyButton="Toggle-Menu-Item"
            NavDropMobileStatus="NavMobile"
            NavDropStatus="NavDrop"
            />
            <TopButton />
            <Intro 
            className="Intro-Inner-Tab"
            className2="Intro Tab">
                <IntroImage 
                Image={Mishka}
                alt="Mishka" 
                BubleText="Мы с аллергией не друзья, цетиризин есть у меня!"/>
                <LekItemTab 
                Img={TabPack2}
                marker1={ChildMarker}
                LekText1="С 6 лет"
                marker2={pills}
                LekText2="Таблетки"
                buttonText1="Возможность длительного применения"
                dropText1="Препарат можно использовать для вторичной профилактики аллергических заболеваний"
                buttonText2="Эталон Н1 антигистаминного средства"
                dropText2="значительно облегчает назальные и глазные симптомы сезонного и круглогодичного аллергического ринита, хронической идиопатической  крапивницы"
                />
            </Intro>
            <DosageUsage 
            MainText="Лекарственный препарат «Цетиризин» таблетки в дозировке 10 мг предназначен для применения у взрослых и детей с 6 лет и старше для облегчения:"
            subtext1="Назальных и глазных симптомов круглогодичного и сезонного аллергического ринита и аллергического конъюктевита, зуда, чиханья, заложенности носа, ринореи, слезоточения, гипермии конъюктевиты"
            subtext2="Гипермии хронической идиопатической крапивницы"
            href="https://www.rceth.by/NDfiles/instr/20_12_3093_s.pdf"
            />
            <div className="section">
                <div className="container">
                    <Title TitleText="Пищевой дневник" />
                    <EatJournal FoodDiary={FoodDiaryTab} />
                </div>
            </div>
            <Questions />
            <Publications />
            <Footer />
        </div>
    );
};