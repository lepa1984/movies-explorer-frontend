import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className='footer'>
        <div className='container'>
            <h2 className='footer__title'>
                Учебный проект Яндекс.Практикум х BeatFilm.
            </h2>
            <div className='footer__wrapper'>
                <p className='footer__copyright'>© 2023</p>
                <nav className='footer__navigation'>
                    <ul className='footer__list'>
                        <li className='footer__item'>
                            <Link
                                className='footer__link'
                                to='https://practicum.yandex.ru/'
                                target='_blank'
                            >
                                Яндекс.Практикум
                            </Link>
                        </li>
                        <li className='footer__item'>
                            <Link
                                className='footer__link'
                                to='https://github.com/lepa1984'
                                target='_blank'
                            >
                                Github
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
);

export default Footer;
