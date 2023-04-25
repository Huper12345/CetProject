import './Intro.scss';
import { LekItem } from './LekItem';
import TabPack from "../../helpers/Images/Packs/Tab2.png"
import ChildMarker from "../../helpers/Images/Markers/son2.png"
import pills from "../../helpers/Images/Markers/pills.png"

export const Intro = () => {
    return (
        <div className="Intro">
            <div className='container'>
                <div className="Intro-inner">
                    <LekItem 
                    Img={TabPack}
                    marker1={ChildMarker}
                    LekText1="С 6 лет"
                    marker2={pills}
                    LekText2="Таблетки"
                    LekText3="Лекарственный препарат цетиризин в таблетках это эффективное средство против аллергии для взрослых"
                    />
                </div>
            </div>
        </div>
    );
};