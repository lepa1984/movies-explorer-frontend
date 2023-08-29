import './Portfolio.css';
import { Link } from 'react-router-dom';

const Portfolio = () => (
    <section className='portfolio'>
        <div className='container'>
            <h3 className='portfolio__title'>Портфолио</h3>
            <ul className='portfolio__list'>
                <li className='portfolio__item'>
                    <Link
                        className='portfolio__link'
                        to='http://d996339v.beget.tech/amelia/'
                        target='_blank'
                    >
                        Статичный сайт
                    </Link>
                </li>
                <li className='portfolio__item'>
                    <Link
                        className='portfolio__link'
                        to='http://d996339v.beget.tech/vela/'
                        target='_blank'
                    >
                        Адаптивный сайт
                    </Link>
                </li>
            </ul>
        </div>
    </section>
);
export default Portfolio;
