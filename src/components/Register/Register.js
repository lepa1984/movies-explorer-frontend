import './Register.css';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';

import Logo from '../../images/logo.svg';
const Register = ({ handleRegister }) => {
    const { values, handleChange, errors, isValid } = useForm();
    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegister({
            name: values.name,
            email: values.email,
            password: values.password,
        });
    };

    return (
        <main className='register'>
            <div className='container'>
                <Link to='/' className='register__logo'>
                    <img src={Logo} alt='Логотип' />
                </Link>
                <h3 className='register__title'>Добро пожаловать!</h3>
                <form
                    className='form register__form'
                    id='form'
                    onSubmit={handleSubmit}
                >
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
                                value={values.name || ''}
                                onChange={handleChange}
                            />
                            <p className='register__error'>{errors.name}</p>
                        </label>
                        <label className='register__field'>
                            <p>E-mail</p>
                            <input
                                name='email'
                                className='register__input'
                                id='email-input'
                                type='email'
                                required
                                placeholder='example@yandex.ru'
                                value={values.email || ''}
                                onChange={handleChange}
                            />
                            <p className='register__error'>{errors.email}</p>
                        </label>
                        <label className='register__field'>
                            <p>Пароль</p>
                            <input
                                name='password'
                                className='register__input'
                                id='password-input'
                                type='password'
                                required
                                value={values.password || ''}
                                onChange={handleChange}
                            />
                            <p className='register__error'>{errors.password}</p>
                        </label>
                    </div>

                    <button
                        className={`register__button ${
                            !isValid ? 'register__button_disabled' : ''
                        }`}
                    >
                        Зарегистрироваться
                    </button>
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
};

export default Register;
