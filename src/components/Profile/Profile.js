import React, { useContext, useEffect, useState } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useForm from '../../hooks/useForm';

function Profile({ isLoggedIn, handleLogout, handleUpdateUser }) {
    const { values, handleChange, resetForm } = useForm();
    const currentUser = useContext(CurrentUserContext);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(true);
    }

    function onSubmitUseForm(e) {
        e.preventDefault();
        handleUpdateUser({
            name: values.name,
            email: values.email,
        });
        setIsEditing(false);
    }

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
                            <p className='profile__caption'>Имя</p>

                            <input
                                className='profile__input'
                                type='text'
                                disabled={!isEditing}
                                placeholder={currentUser.name}
                                value={values.name || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label className='profile__label'>
                            <p className='profile__caption'>Почта</p>

                            <input
                                className='profile__input'
                                type='text'
                                disabled={!isEditing}
                                placeholder={currentUser.email}
                                value={values.email || ''}
                                onChange={handleChange}
                            />
                        </label>
                    </form>

                    <div className='profile__buttons'>
                        {!isEditing && (
                            <>
                                <button
                                    className='profile__button'
                                    type='button'
                                    onClick={handleEditClick}
                                >
                                    Редактировать
                                </button>
                                <button
                                    className='profile__button profile__button_logout'
                                    onClick={handleLogout}
                                >
                                    Выйти из аккаунта
                                </button>
                            </>
                        )}

                        {isEditing && (
                            <button
                                className={`profile__button-save `}
                                type='submit'
                                onClick={onSubmitUseForm}
                                disabled={!isLoggedIn}
                            >
                                Сохранить
                            </button>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Profile;
