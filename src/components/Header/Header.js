import './Header.scss';
import { Logo } from './Logo';
import { Nav } from './Nav';

export const Header = ({BuyButtonStatus, BuyButtonHref}) => {
    return (
        <div className="Header">
            <div className='container'>
                <div className='Header-inner'>
                    <Logo />
                    <Nav 
                    mainText='Главная'
                    main='/'
                    text2='Контакты'
                    href2='#'
                    BuyButton={BuyButtonStatus}
                    hrefBuy={BuyButtonHref}
                    />
                </div>
            </div>
        </div>
    )
};