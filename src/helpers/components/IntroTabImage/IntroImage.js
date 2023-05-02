import "./IntroImage.scss";
import { useState } from "react";


export const IntroImage = ({Image}) => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
    
    return(
        <div onClick={handleOpen} className="IntroImage-Wrapper">
            <img className="IntroImage" alt="Mishka" src={Image}></img>
            <div className="Dialog-Buble-Wrapper">
            <p className={open ? 'Dialog-Buble active' : 'Dialog-Buble'}>Мы с аллергией не друзья, цетиризин есть у меня!</p>
            </div>
        </div> 
    )
}