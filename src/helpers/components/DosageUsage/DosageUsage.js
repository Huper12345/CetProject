import "./DosageUsage.scss";
import { Title } from "../../Title";
import Baktery from "../../Images/DosageUsage/Baktery/umbrella.webp"
import { InstructionButton } from "./InstructionButton";




export const DosageUsage = ({
    MainText, 
    subtext1, 
    subtext2,
    subtext3,
    subtext4,
    addText1,
    addText2,
    addText3,
    addText4,
    href}) => {
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
                    <p className="DosageUsage-Subtext">{subtext1}<i className="DosageUsage-AddText">{addText1}</i></p>
                    <p className="DosageUsage-Subtext">{subtext2}<i className="DosageUsage-AddText">{addText2}</i></p>
                    <p className="DosageUsage-Subtext">{subtext3}<i className="DosageUsage-AddText">{addText3}</i></p>
                    <p className="DosageUsage-Subtext">{subtext4}<i className="DosageUsage-AddText">{addText4}</i></p>
                    </div>
                    <InstructionButton href={href} />

                    </div>
                </div>
            </div>
        </div> /*DosageUsage */
    );
};