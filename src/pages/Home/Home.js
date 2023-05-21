import "./Home.scss";
import { Intro } from "../../components/Intro";
import { Header } from "../../components/Header";
import { LekItem } from '../../components/Intro/LekItem';
import { Preview } from '../../components/Intro/Preview';
import { Footer } from "../../components/Footer";
import TabPack from "../../helpers/Images/Packs/Tab3.png"
import TabPack2 from "../../helpers/Images/Packs/kaplip5.png"
import ChildMarker from "../../helpers/Images/Markers/son2.png"
import pills from "../../helpers/Images/Markers/pills.png"
import babymarker from "../../helpers/Images/Markers/baby-boy1.png"
import dropMarker from "../../helpers/Images/Markers/water-drop.png"

export const Home = () => {
    return (
        <div className="Home">
            <Header />
            <Intro>
                 <Preview />
                    <div className='Intro-select'>
                        <LekItem 
                        Img={TabPack}
                        marker1={ChildMarker}
                        LekText1="С 6 лет"
                        marker2={pills}
                        LekText2="Таблетки"
                        LekText3="Лекарственный препарат цетиризин в таблетках это эффективное средство против аллергии для взрослых"
                        href='/Tablets'
                        />
                        <LekItem 
                        Img={TabPack2}
                        marker1={babymarker}
                        LekText1="С 6 месяцев"
                        marker2={dropMarker}
                        LekText2="Капли"
                        LekText3="Лекарственный препарат цетиризин в каплях это эффективное средство против аллергии для детей"
                        href='/Drops'
                        />
                    </div>
            </Intro>
            <Footer
            InstructionButtonStatus="Instruction-Button Hide"
            />
        </div>
    )
};