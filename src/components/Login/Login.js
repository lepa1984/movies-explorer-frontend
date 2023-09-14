import './Login.css';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import useForm from '../../hooks/useForm';
const Login = ({ handleLogin }) => {
    const { values, handleChange, errors, isValid } = useForm({});
    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin({
            email: values.email,
            password: values.password,
        });
    };

    return (
        <main className='login'>
            <div className='container'>
                <Link to='/' className='login__logo'>
                    <img src={Logo} alt='Логотип' />
                </Link>
                <h3 className='login__title'>Рады видеть!</h3>
                <form
                    className='form login__form'
                    id='login-form'
                    onSubmit={handleSubmit}
                >
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
                                value={values.email || ''}
                                onChange={handleChange}
                                pattern='\w+@\w+\.\w+'
                            />
                            <p className='login__error'>{errors.email}</p>
                        </label>
                        <label className='login__field'>
                            <p>Пароль</p>
                            <input
                                name='password'
                                className='login__input'
                                id='password-input'
                                type='password'
                                required
                                value={values.password || ''}
                                onChange={handleChange}
                                minLength='8'
                            />
                            <p className='login__error'>{errors.password}</p>
                        </label>
                    </div>

                    <button
                        className={`login__button ${
                            !isValid ? 'login__button_disabled' : ''
                        }`}
                    >
                        {' '}
                        Войти
                    </button>
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
};

export default Login;
