import './Header.scss';
import { Logo } from './Logo';
import { Nav } from './Nav';
import { NavDrop } from './NavDrop';
import { NavToggle } from './NavToggle';

export const Header = ({
    BuyButtonStatus,
    BuyButtonHref, 
    MobileBuyLink="#", 
    ToggleBuyButton="ToggleBuyButton-Hide",
    NavDropMobileStatus="NavMobile-Hide",
    NavDropStatus="NavDrop-Hide",
    NavDropButtonText="Препарат",
    NavDropText1="Применение/дозировка",
    NavDropLink1="DosageUsage",
    NavDropText2="Пищевой дневник",
    NavDropLink2="EatJournal",
    NavDropText3="Вопросы",
    NavDropLink3="Questions",
    NavDropText4="Полезные материалы",
    NavDropLink4="Publications",
    }) => {
    
    return (
        <div id="Header" className="Header">
            <div className='container'>
                <div className='Header-inner'>
                    <Logo />
                    <div className='Nav-Position'>
                        <div className="Nav-Wrapper">
                            <NavDrop 
                            buttonText={NavDropButtonText}
                            droptext={NavDropText1}
                            href1={NavDropLink1}
                            droptext2={NavDropText2}
                            href2={NavDropLink2}
                            droptext3={NavDropText3}
                            href3={NavDropLink3}
                            droptext4={NavDropText4}
                            href4={NavDropLink4}
                            NavClass={NavDropStatus}
                            />
                            <Nav 
                            mainText='Главная'
                            main='/'
                            text2='Контакты'
                            href2='Footer'
                            BuyButton={BuyButtonStatus}
                            hrefBuy={BuyButtonHref}
                            />
                        </div>
                        <NavToggle
                        Mobilehref={MobileBuyLink}
                        ToggleBuyButton={ToggleBuyButton}
                        NavDropMobileStatus={NavDropMobileStatus}
                        NavDropMobileButtonText={NavDropButtonText}
                        NavDropMobileDropText1={NavDropText1}
                        NavDropMobileDropLink1={NavDropLink1}
                        NavDropMobileDropText2={NavDropText2}
                        NavDropMobileDropLink2={NavDropLink2}
                        NavDropMobileDropText3={NavDropText3}
                        NavDropMobileDropLink3={NavDropLink3}
                        NavDropMobileDropText4={NavDropText4}
                        NavDropMobileDropLink4={NavDropLink4}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};