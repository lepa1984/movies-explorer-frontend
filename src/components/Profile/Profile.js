import React, { useContext, useEffect, useState } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useForm from '../../hooks/useForm';
function Profile({ isLoggedIn, handleLogout, handleUpdateUser }) {
    const { values, handleChange, isValid, resetForm } = useForm();
    const currentUser = useContext(CurrentUserContext);
    const [lastDetails, setLastDetails] = useState(false);

    function onSubmitUseForm(e) {
        e.preventDefault();
        handleUpdateUser({
            name: values.name,
            email: values.email,
        });
    }

    useEffect(() => {
        if (
            currentUser.name === values.name &&
            currentUser.email === values.email
        ) {
            setLastDetails(true);
        } else {
            setLastDetails(false);
        }
    }, [currentUser.email, currentUser.name, values]);

    useEffect(() => {
        if (currentUser) {
            resetForm(currentUser);
        }
    }, [currentUser, resetForm]);
    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <main className='profile'>
                <div className='container'>
                    <h1 className='profile__title'>
                        Привет, {currentUser.name}!
                    </h1>
                    <form className='profile__form' onSubmit={onSubmitUseForm}>
                        <label className='profile__label'>
                            {' '}
                            <p className='profile__caption'>Имя</p>
                            <input
                                className='profile__input'
                                type='text'
                                readOnly
                                placeholder={currentUser.name}
                                value={values.name || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label className='profile__label'>
                            {' '}
                            <p className='profile__caption'>Почта</p>
                            <input
                                className='profile__input'
                                type='text'
                                placeholder={currentUser.email}
                                value={values.email || ''}
                                onChange={handleChange}
                                readOnly
                            />
                        </label>
                    </form>
                    <div className='profile__buttons'>
                        <button
                            className={
                                isValid && !lastDetails
                                    ? 'profile__button'
                                    : 'profile__button_saved'
                            }
                            onClick={onSubmitUseForm}
                        >
                            Редактировать
                        </button>
                        <button
                            className='profile__button profile__button_logout'
                            onClick={handleLogout}
                        >
                            Выйти из аккаунта
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Profile;
