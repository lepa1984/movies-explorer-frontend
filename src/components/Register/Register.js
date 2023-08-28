import './Register.css';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
const Footer = () => (
    <main className='register'>
        <div className='container'>
            <Link to='/' className='register__logo'>
                <img src={Logo} alt='Логотип' />
            </Link>
            <h3 className='register__title'>Добро пожаловать!</h3>
            <form className='register__form' id='register-form'>
                <div className='register__fields'>
                    <label className='register__field'>
                        <p>Имя</p>
                        <input
                            name='name'
                            className='register__input'
                            id='name-input'
                            type='text'
                            minLength='2'
                            maxLength='40'
                            required
                            placeholder='Виталий'
                            value='Виталий'
                        />
                    </label>
                    <label className='register__field'>
                        <p>E-mail</p>
                        <input
                            name='email'
                            className='register__input'
                            id='email-input'
                            type='email'
                            required
                            placeholder='pochta@yandex.ru'
                            value='pochta@yandex.ru'
                        />
                    </label>
                    <label className='register__field'>
                        <p>Пароль</p>
                        <input
                            name='password'
                            className='register__input'
                            id='password-input'
                            type='password'
                            required
                        />
                    </label>
                </div>
                <p className='register__error'>Что-то пошло не так...</p>
                <button className='register__button'>Зарегистрироваться</button>
            </form>
            <p className='register__text'>
                Уже зарегистрированы?
                <Link to={'/sign-in'} className='register__link'>
                    Войти
                </Link>
            </p>
        </div>
    </main>
);

export default Footer;
