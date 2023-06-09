import './LekItem.scss';
import {Link} from 'react-router-dom';


export const LekItem = ({
    Img,
    alt, 
    LekText1, 
    alt1, 
    marker1, 
    LekText2, 
    alt2, 
    marker2, 
    LekText3,
    WildImg,
    href="#"
    }) => {

    return (
        <Link to={href} className='LekItem'> 
                <div className='LekItem-content'>
                    <img className='lekItem-img' src={Img} alt={alt}></img>
                    
                    <div className='LekItem-textWrapper'>

                        <div className='LekItem-textBlock'>
                            <img className='LekItem-marker' src={marker1} alt={alt1}></img>
                            <h2 className='LekItem-text'>{LekText1}</h2>
                        </div>
                        <div className='LekItem-textBlock'>
                            <img className='LekItem-marker' src={marker2} alt={alt2}></img>
                            <h2 className='LekItem-text'>{LekText2}</h2>
                        </div>
                        <div className='LekItem-subtext'>{LekText3}</div>
                        <div className='LekItem-select'>Подробнее</div>
                        <img className='Mishkaz' src={WildImg} alt='Mishkaizayka'></img>

                    </div> {/*  LekItem-textWrapper' */}

                </div>
        </Link>
    );
};