import "./Publications.scss"
import { Title } from "../../helpers/Title";
import { PublicationsItem } from "./PublicationsItem";
import Image from "../../helpers/Images/Publications/1/photo1.png"
import Image2 from "../../helpers/Images/Posts/post2.jpg"



export const Publications = () => {
    return(
        <div className="section">
            <div className="container">
                <Title TitleText="Полезные материалы" />
                <div id="Publications" className="Publications-Inner">
                    <PublicationsItem 
                    srcImage={Image} 
                    alt="Publication1Image"
                    pTitle="Первые симптомы аллергии" 
                    pPreviewText="Чихание - естественный для организма способ избавления от раздражающих субстанций..."
                    href="/Publications/1"
                    />
                    <PublicationsItem 
                    srcImage={Image2} 
                    alt="Publication1Image"
                    pTitle="Как облегчить аллергию весной?" 
                    pPreviewText="Для многих людей весенние солнечные дни омрачаются чиханьем, кашлем..."
                    href="/Publications/2"
                    />
                </div>
            </div>
        </div>
    );
};