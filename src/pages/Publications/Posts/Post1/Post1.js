import "../Post.scss"
import { Header } from "../../../../components/Header";
import { PreviousButton } from "../../../../helpers/components/PreviousButton";
import Post1Image from "../../../../helpers/Images/Posts/post1.jpg"
import {Title} from "../../../../helpers/Title"


export const Post1 = () => {
    return(
        <div className="Post">
            <Header />
            <div className="container">
                <div className="Post-Wrapper">
                    <PreviousButton />
                    <div className="Post-Content">
                    <Title TitleText="Первые симптомы аллергии" />
                    <img className="Post-Image" alt="Первые симптомы аллергии" src={Post1Image}></img>
                    <div className="Post-Text">

                    Чихание - естественный для организма способ избавления от раздражающих субстанций (пыль, песок и т.д.), которые удаляются вместе с небольшим количеством секреторной жидкости. При аллергии эта реакция становится преувеличенной. Приступы чихания длятся изо дня в день без очевидной причины, при отсутствии признаков простуды.

                    <p className="Post-Paragraph">Заложенность носа, насморк</p>

                    При аллергии слизистая оболочка носа воспаляется и утолщается. Это приводит к нарушению нормального оттока слизи из носовых ходов или даже полностью его блокирует. Попытки высморкаться ни к чему не приводят и только усиливают заложенность носа. Часто аллергия проявляется непрерывным или эпизодическим выделением из носа большого количества прозрачной водянистой слизи («вода из носа»), тогда как при простуде выделения обычно желтоватые и более густые.
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};