import "./IntroImage.scss";


export const IntroImage = ({Image}) => {
    return(
        <div className="IntroImage-Wrapper">
            <img className="IntroImage" alt="Mishka" src={Image}></img>
        </div>
    )
}