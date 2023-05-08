import "./Title.scss"



export const Title = ({TitleText, TitleColor="Title-Text"}) => {
    return(
        <div className="Title-Wrapper">
            <h2 className={TitleColor}>{TitleText}</h2>
        </div>
    )
}