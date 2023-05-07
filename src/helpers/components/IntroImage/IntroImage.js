import "./IntroImage.scss";
import { useState } from "react";


export const IntroImage = ({Image, alt, BubleText}) => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
    
    return(
        <div onClick={handleOpen} className="IntroImage-Wrapper">
            <div className="Intro-Image-Inner">
                <img className="IntroImage" alt={alt} src={Image}></img>
                    <div className="Dialog-Buble-Wrapper">
                        <p className={open ? 'Dialog-Buble active' : 'Dialog-Buble'}>{BubleText}</p>
                    </div>
            </div>
        </div> 
    )
}