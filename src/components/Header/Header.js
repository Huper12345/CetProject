import './Header.scss';
import { Logo } from './Logo';
import { Nav } from './Nav';

export const Header = () => {
    return (
        <div className="Header">
            <div className='container'>
                <div className='Header-inner'>
                    <Logo />
                    <Nav 
                    mainText='Главная'
                    main='/'
                    text3='Контакты'
                    />
                </div>
            </div>
        </div>
    )
};