import "./SubTitle.scss"


export const SubTitle = ({Title, className="SubTitle-Text"}) => {
    return(
        <div className="SubTitle-Wrapper">
            <h3 className={className}>{Title}</h3>
        </div>
    );
};