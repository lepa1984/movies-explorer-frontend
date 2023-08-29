import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
function Header({ loggedIn }) {
    const { pathname } = useLocation();
    return (
        <header
            className={`header ${loggedIn ? 'header_no-auth' : 'header_auth'} ${
                pathname === '/' ? 'header_gray' : ''
            }`}
        >
            <div className='container'>
                <Link to='/' className='header__logo'>
                    <img src={Logo} alt='логотип' />
                </Link>
                {loggedIn ? <AuthNavigation /> : <Navigation />}
            </div>
        </header>
    );
}
export default Header;
