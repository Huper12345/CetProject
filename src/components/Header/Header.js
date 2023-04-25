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
                    text1='Главная'
                    text3='Контакты'
                    />
                </div>
            </div>
        </div>
    )
};