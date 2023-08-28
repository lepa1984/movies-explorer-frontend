import './AboutMe.css';
import { Link } from 'react-router-dom';
import studentPhoto from '../../images/student.jpg';

const AboutMe = () => (
    <section className='about-me' id='about-me'>
        <div className='container'>
            <h2 className='about-me__title title-section'>Студент</h2>
            <div className='about-me__wrapper'>
                <div className='about-me__description'>
                    <h3 className='about-me__subtitle'>Виталий</h3>
                    <p className='about-me__post'>
                        Фронтенд-разработчик, 30 лет
                    </p>
                    <p className='about-me__text'>
                        Я родился и живу в Саратове, закончил факультет
                        экономики СГУ. У меня есть жена и дочь. Я люблю слушать
                        музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С
                        2015 года работал в компании «СКБ Контур». После того,
                        как прошёл курс по веб-разработке, начал заниматься
                        фриланс-заказами и ушёл с постоянной работы.
                    </p>

                    <Link
                        className='about-me__link'
                        to='https://github.com/lepa1984'
                        target='_blank'
                    >
                        Github
                    </Link>
                </div>
                <img
                    className='about-me__photo'
                    src={studentPhoto}
                    alt='Студент'
                />
            </div>
          
        </div>
    </section>
);

export default AboutMe;
