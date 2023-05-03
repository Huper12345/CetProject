import "./CetTablets.scss";
import { Header } from "../../components/Header";
import { Intro } from "../../components/Intro";
import { LekItemTab } from "./LekItemTab";
import { IntroImage } from "../../helpers/components/IntroTabImage";
import { EatJournal } from "../../helpers/components/EatJournal";
import TabPack2 from "../../helpers/Images/Packs/Tab2.png"
import ChildMarker from "../../helpers/Images/Markers/son2.png"
import pills from "../../helpers/Images/Markers/pills.png"
import Mishka from "../../helpers/Images/Intro/mishka2.png"
import { Title } from "../../helpers/Title";



export const CetTablets = () => {
    return(
        <div className="CetTablets">
            <Header />
            <Intro 
            className="Intro-Inner-Tab"
            className2="Intro Tab">
                <IntroImage Image={Mishka} />
                <LekItemTab 
                Img={TabPack2}
                marker1={ChildMarker}
                LekText1="С 6 лет"
                marker2={pills}
                LekText2="Таблетки"
                />
            </Intro>
            <div className="section">
                <div className="container">
                    <Title TitleText="Пищевой дневник" />
                    <EatJournal />
                </div>
            </div>
        </div>
    );
};