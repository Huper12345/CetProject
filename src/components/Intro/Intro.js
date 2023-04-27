import './Intro.scss';
import { LekItem } from './LekItem';
import { Preview } from './Preview';
import TabPack from "../../helpers/Images/Packs/Tab3.png"
import TabPack2 from "../../helpers/Images/Packs/kaplip5.png"
import ChildMarker from "../../helpers/Images/Markers/son2.png"
import pills from "../../helpers/Images/Markers/pills.png"
import babymarker from "../../helpers/Images/Markers/baby-boy1.png"
import dropMarker from "../../helpers/Images/Markers/water-drop.png"

export const Intro = () => {
    return (
        <div className="Intro">
            <div className='container'>
                <div className="Intro-inner">
                    <Preview />
                    <div className='Intro-select'>
                        <LekItem 
                        Img={TabPack}
                        marker1={ChildMarker}
                        LekText1="С 6 лет"
                        marker2={pills}
                        LekText2="Таблетки"
                        LekText3="Лекарственный препарат цетиризин в таблетках это эффективное средство против аллергии для взрослых"
                        />
                        <LekItem 
                        Img={TabPack2}
                        marker1={babymarker}
                        LekText1="С 6 месяцев"
                        marker2={dropMarker}
                        LekText2="Капли"
                        LekText3="Лекарственный препарат цетиризин в каплях это эффективное средство против аллергии для детей"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};