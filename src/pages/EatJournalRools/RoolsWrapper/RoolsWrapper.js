import "./RoolsWrapper.scss"
import { SubTitle } from "../../../helpers/components/SubTitle";
import { LinkButton } from "../../../helpers/components/LinkButton";


export const RoolsWrapper = () => {
    return(
        <div className="RoolsWrapper">
            <SubTitle Title="Правила ведения дневника" />
            <div className="Rools-Wrapper-Text">
            При вводе в рацион новых ингредиентов – особое внимание к заполнению дневника. Для этого есть несколько простых правил и рекомендаций.
            </div>
            <LinkButton linkWay="/EatJournalRools" ButtonText="Подробнее" />
        </div>
    );
};