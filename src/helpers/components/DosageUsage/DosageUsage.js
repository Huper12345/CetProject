import "./DosageUsage.scss";
import { Title } from "../../Title";
import Baktery from "../../Images/DosageUsage/Baktery/umbrella.png"
import { InstructionButton } from "./InstructionButton";




export const DosageUsage = ({MainText, subtext1, subtext2, href}) => {
    return(
        <div id="DosageUsage" className="DosageUsage">
            <div className="section">
                <div className="container">
                    <Title TitleText="Применение и дозировка" TitleColor="Title-Text yellow" />
                    <div className="DosageUsage-inner">
                    <div className="DosageUsage-ImageWrapper">
                        <img className="DosageUsage-Umbrella" alt="Baktery" src={Baktery}></img>
                    </div>
                    <div className="DosageUsage-TextWrapper">
                    {MainText}
                    <p className="DosageUsage-Subtext">{subtext1}</p>
                    <p className="DosageUsage-Subtext">{subtext2}</p>
                    </div>
                    <InstructionButton href={href} />

                    </div>
                </div>
            </div>
        </div> /*DosageUsage */
    );
};