import "./CetTablets.scss";
import { Header } from "../../components/Header";
import { Intro } from "../../components/Intro";
import { LekItemTab } from "./LekItemTab";
import TabPack2 from "../../helpers/Images/Packs/Tab2.png"
import ChildMarker from "../../helpers/Images/Markers/son2.png"
import pills from "../../helpers/Images/Markers/pills.png"



export const CetTablets = () => {
    return(
        <div className="CetTablets">
            <Header />
            <Intro 
            className="Intro-Inner-Tab"
            className2="Intro">
                <div className="Intro-Tab">
                <LekItemTab 
                Img={TabPack2}
                marker1={ChildMarker}
                LekText1="С 6 лет"
                marker2={pills}
                LekText2="Таблетки"
                />
                </div>
            </Intro>
        </div>
    );
};