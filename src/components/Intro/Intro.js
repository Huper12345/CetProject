import './Intro.scss';
import { LekItem } from './LekItem';
import TabPack from "../../helpers/Images/Packs/Tab1.png"
import ChildMarker from "../../helpers/Images/Markers/son2.png"

export const Intro = () => {
    return (
        <div className="Intro">
            <div className='container'>
                <div className="Intro-inner">
                    <LekItem 
                    Img={TabPack}
                    marker1={ChildMarker}
                    LekText1="С 6 лет"
                    />
                </div>
            </div>
        </div>
    );
};