import "./Home.scss";
import { Intro } from "../../components/Intro";
import { Header } from "../../components/Header";
import { LekItem } from '../../components/Intro/LekItem';
import { Preview } from '../../components/Intro/Preview';
import { Footer } from "../../components/Footer";
import TabPack from "../../helpers/Images/Packs/Tab9Height.webp"
import TabPack2 from "../../helpers/Images/Packs/Kapli16Height.webp"
import ChildMarker from "../../helpers/Images/Markers/age.webp"
import pills from "../../helpers/Images/Markers/pills.webp"
import babymarker from "../../helpers/Images/Markers/baby-boy1.webp"
import dropMarker from "../../helpers/Images/Markers/water-drop.webp"
import TabletsPreviewImage from "../../helpers/Images/Intro/devushkaLow.webp"
import DropsPreviewImage from "../../helpers/Images/Intro/MishaZaecLow.webp"

export const Home = () => {
    return (
        <div className="Home">
            <Header 
            NavRouteText1="Капли"
            NavRouteLink1="/Drops"
            MainNav="Таблетки"
            MainLink="/Tablets"
            />
            <Intro>
                 <Preview />
                    <div className='Intro-select'>
                        <LekItem 
                        Img={TabPack}
                        marker1={ChildMarker}
                        LekText1="С 6 лет"
                        marker2={pills}
                        LekText2="Таблетки"
                        LekText3="Цетиризин, таблетки - это эффективный лекарственный препарат против аллергии для взрослых"
                        href='/Tablets'
                        WildImg={TabletsPreviewImage}
                        />
                        <LekItem 
                        Img={TabPack2}
                        marker1={babymarker}
                        LekText1="С 6 месяцев"
                        marker2={dropMarker}
                        LekText2="Капли"
                        LekText3="Цетиризин, капли - это эффективный лекарственный препарат против аллергии для детей"
                        href='/Drops'
                        WildImg={DropsPreviewImage}
                        />
                    </div>
            </Intro>
            <Footer
            InstructionButtonStatus="Instruction-Button Hide"
            Navroutelink2="/Tablets"
            Navroutetext2="Цетиризин таблетки"
            Navroutelink3="/Drops"
            Navroutetext3="Цетиризин капли"
            />
        </div>
    )
};