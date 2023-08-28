import './Portfolio.css';
import { Link } from 'react-router-dom';

const Portfolio = () => (
    <section className='portfolio'>
        <div className='container'>
            <h3 className='portfolio__title'>Портфолио</h3>
            <ul className='portfolio__list'>
                <li className='portfolio__item'>
                    <Link className='portfolio__link' to='/'>
                        Статичный сайт
                    </Link>
                </li>
                <li className='portfolio__item'>
                    <Link className='portfolio__link' to='/'>
                        Адаптивный сайт
                    </Link>
                </li>
                <li className='portfolio__item'>
                    <Link className='portfolio__link' to='/'>
                        Одностраничное приложение
                    </Link>
                </li>
            </ul>
        </div>
    </section>
);
export default Portfolio;
