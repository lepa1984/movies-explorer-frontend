import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { useState } from 'react';

const Navigation = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const handleOpenMenu = () => {
        setIsMenuOpened(!isMenuOpened);
    };

    return (
        <div className='header__wrapper'>
            <button className='header__burger' onClick={handleOpenMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div
                className={` header__overlay
      ${isMenuOpened ? 'header__menu_opened' : ''}`}
            >
                <div className='header__inner'>
                    <div
                        className='header__close'
                        onClick={handleOpenMenu}
                    ></div>
                    <nav className='header__navigation'>
                        <ul className={'header__list'}>
                            <li
                                className='
                        header__item
                        header__item_main'
                            >
                                <NavLink
                                    to='/'
                                    onClick={handleOpenMenu}
                                    className={({ isActive }) => `
                            header__link
             
            ${isActive ? 'header__link_active' : ''}`}
                                >
                                    Главная
                                </NavLink>
                            </li>
                            <li className='header__item'>
                                <NavLink
                                    to='/movies'
                                    onClick={handleOpenMenu}
                                    className={({ isActive }) => `
                            header__link
             
            ${isActive ? 'header__link_active' : ''}`}
                                >
                                    Фильмы
                                </NavLink>
                            </li>
                            <li className='header__item'>
                                <NavLink
                                    to='/saved-movies'
                                    onClick={handleOpenMenu}
                                    className={({ isActive }) => `
                            header__link
               
            ${isActive ? 'header__link_active' : ''}`}
                                >
                                    Сохранённые фильмы
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <NavLink
                        to='/profile'
                        onClick={handleOpenMenu}
                        className='
                    header__profile'
                    >
                        <div className='header__profile_icon' />
                        Аккаунт
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
