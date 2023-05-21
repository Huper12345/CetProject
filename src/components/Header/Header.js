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
    }) => {
    
    return (
        <div className="Header">
            <div className='container'>
                <div className='Header-inner'>
                    <Logo />
                    <div className='Nav-Position'>
                        <div className="Nav-Wrapper">
                            <NavDrop 
                            buttonText="Препарат"
                            droptext="Применение/дозировка"
                            href1='DosageUsage'
                            droptext2="Пищевой дневник"
                            href2='EatJournal'
                            droptext3="Вопросы"
                            href3='Questions'
                            droptext4="Полезные материалы"
                            href4="Publications"
                            />
                            <Nav 
                            mainText='Главная'
                            main='/'
                            text2='Контакты'
                            href2='#'
                            BuyButton={BuyButtonStatus}
                            hrefBuy={BuyButtonHref}
                            />
                        </div>
                        <NavToggle
                        Mobilehref={MobileBuyLink}
                        ToggleBuyButton={ToggleBuyButton}
                        NavDropMobileStatus={NavDropMobileStatus} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};