import './AboutProject.css';

function AboutProject() {
    return (
        <section id='about-project' className='about-project'>
            <div className='container'>
                <h2 className='about-project__title title-section'>
                    О проекте
                </h2>
                <ul className='about-project__list'>
                    <li className='about-project__item'>
                        <h3 className='about-project__subtitle'>
                            Дипломный проект включал 5 этапов
                        </h3>
                        <p className='about-project__text'>
                            Составление плана, работу над бэкендом, вёрстку,
                            добавление функциональности и финальные доработки.
                        </p>
                    </li>
                    <li className='about-project__item'>
                        <h3 className='about-project__subtitle'>
                            На выполнение диплома ушло 5 недель
                        </h3>
                        <p className='about-project__text'>
                            У каждого этапа был мягкий и жёсткий дедлайн,
                            которые нужно было соблюдать, чтобы успешно
                            защититься.
                        </p>
                    </li>
                </ul>
                <div className='about-project__periods'>
                    <div className='about-project__period'>
                        <p className='about-project__week'>1 неделя</p>{' '}
                        <p className='about-project__direction'>Back-end</p>
                    </div>
                    <div className='about-project__period'>
                        <p className='about-project__week'>4 недели</p>
                        <p className='about-project__direction'>Front-end</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default AboutProject;
