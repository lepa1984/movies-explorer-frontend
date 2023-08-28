import './NavTab.css';

export default function NavTab() {
    return (
        <nav className='nav-tab'>
            <ul className='nav-tab__list'>
                <li className='nav-tab__item'>
                    <a href='#about-project' class='nav-tab__link'>
                        О проекте
                    </a>
                </li>
                <li className='nav-tab__item'>
                    <a href='#techs' class='nav-tab__link'>
                        Технологии
                    </a>
                </li>
                <li className='nav-tab__item'>
                    <a href='#about-me' class='nav-tab__link'>
                        Студент
                    </a>
                </li>
            </ul>
        </nav>
    );
}
