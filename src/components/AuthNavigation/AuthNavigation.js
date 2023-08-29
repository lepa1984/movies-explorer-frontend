import { Link } from 'react-router-dom';
import './AuthNavigation.css';

const AuthNavigation = () => (
    <nav className='header__navigation'>
        <ul className='header__list'>
            <li className='header__item'>
                <Link className='header__signup header__link' to='/sign-up'>
                    Регистрация
                </Link>
            </li>
            <li className='header__item'>
                <Link className='header__signin header__link' to='/sign-in'>
                    Войти
                </Link>
            </li>
        </ul>
    </nav>
);

export default AuthNavigation;
