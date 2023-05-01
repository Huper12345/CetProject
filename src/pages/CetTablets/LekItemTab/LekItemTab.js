import './LekItemTab.scss';
import Mishkaz from "./images/mishkaz.png"
import { Advantages } from '../../../helpers/components/Advantages/Advantages';


export const LekItemTab = ({
    Img,
    alt, 
    LekText1, 
    alt1, 
    marker1, 
    LekText2, 
    alt2, 
    marker2, 
    }) => {

    return (
        <div className='LekItem-Tab'> 
                <div className='LekItem-content-Tab'>
                    <img className='lekItem-img-Tab' src={Img} alt={alt}></img>
                    
                    <div className='LekItem-textWrapper-Tab'>

                        <div className='LekItem-textBlock'>
                            <img className='LekItem-marker-Tab' src={marker1} alt={alt1}></img>
                            <h2 className='LekItem-text-Tab'>{LekText1}</h2>
                        </div>
                        <div className='LekItem-textBlock-Tab'>
                            <img className='LekItem-marker-Tab' src={marker2} alt={alt2}></img>
                            <h2 className='LekItem-text-Tab'>{LekText2}</h2>
                        </div>
                        <Advantages 
                        buttonText="Возможность длительного применения"
                        droptext="Препарат можно использовать для вторичной профилактики аллергических заболеваний"
                        />
                        <Advantages 
                        buttonText="Эталон Н1 антигистаминного средства"
                        droptext="значительно облегчает назальные и глазные симптомы сезонного и круглогодичного аллергического ринита, хронической идиопатической  крапивницы"
                        />

                    </div> {/*  LekItem-textWrapper' */}

                </div>
        </div>
    );
};