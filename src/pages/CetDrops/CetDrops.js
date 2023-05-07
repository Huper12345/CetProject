import "./CetDrops.scss";
import { Header } from "../../components/Header";
import { Intro } from "../../components/Intro";
import { LekItemTab } from "../../helpers/components/LekItemTab";
import { IntroImage } from "../../helpers/components/IntroImage";
import Zaec from "../../helpers/Images/Intro/zaec.png"
import DropsPack from "../../helpers/Images/Packs/kaplip7.png"
import BabyMarker from "../../helpers/Images/Markers/baby-boy1.png"
import DropsMarker from "../../helpers/Images/Markers/water-drop.png"



export const CetDrops = () => {
    return(
        <div className="CetDrops">
            <Header />
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
        </div>
    );
};