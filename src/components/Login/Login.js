import './Login.css';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
const Footer = () => (
    <main className='login'>
        <div className='container'>
            <Link to='/' className='login__logo'>
                <img src={Logo} alt='Логотип' />
            </Link>
            <h3 className='login__title'>Рады видеть!</h3>
            <form className='login__form' id='login-form'>
                <div className='login__fields'>
                    <label className='login__field'>
                        <p>E-mail</p>
                        <input
                            name='email'
                            className='login__input'
                            id='email-input'
                            type='email'
                            required
                            placeholder='example@yandex.ru'
                        />
                    </label>
                    <label className='login__field'>
                        <p>Пароль</p>
                        <input
                            name='password'
                            className='login__input'
                            id='password-input'
                            type='password'
                            required
                        />
                    </label>
                </div>
                <p className='login__error'>Что-то пошло не так...</p>
                <button className='login__button'> Войти</button>
            </form>
            <p className='login__text'>
                Ещё не зарегистрированы?
                <Link to={'/sign-up'} className='login__link'>
                    Регистрация
                </Link>
            </p>
        </div>
    </main>
);

export default Footer;
