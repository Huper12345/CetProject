import "./Title.scss"



export const Title = ({TitleText}) => {
    return(
        <div className="Title-Wrapper">
            <h2 className="Title-Text">{TitleText}</h2>
        </div>
    )
}