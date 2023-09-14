import React, { useContext, useEffect, useState } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useForm from '../../hooks/useForm';

function Profile({
    isLoggedIn,
    handleLogout,
    handleUpdateUser,
    showSuccessMessage,
    conflictError,
}) {
    const { values, handleChange, resetForm } = useForm();
    const currentUser = useContext(CurrentUserContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editValues, setEditValues] = useState({
        name: '',
        email: '',
    });

    function handleEditClick() {
        if (!isEditing) {
            setEditValues({
                name: currentUser.name,
                email: currentUser.email,
            });
        }
        setIsEditing(!isEditing);
    }

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
            setIsEditing(true);
        } else {
            setIsEditing(false);
        }
    }, [currentUser, values]);

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
                    <form className='profile__form form'>
                        <div className='profile__inputs'>
                            <label className='profile__label'>
                                <p className='profile__caption'>Имя</p>

                                <input
                                    name='name'
                                    className='profile__input'
                                    type='text'
                                    disabled={isEditing}
                                    placeholder={currentUser.name}
                                    value={values.name || ''}
                                    onChange={handleChange}
                                />
                            </label>
                            <label className='profile__label'>
                                <p className='profile__caption'>Почта</p>

                                <input
                                    name='email'
                                    className='profile__input'
                                    type='text'
                                    disabled={isEditing}
                                    placeholder={currentUser.email}
                                    value={values.email || ''}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>

                        <div className='profile__buttons'>
                            {isEditing && (
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

                            {!isEditing && (
                                <button
                                    className={`profile__button_save `}
                                    type='submit'
                                    onClick={onSubmitUseForm}
                                    disabled={
                                        !isLoggedIn ||
                                        (values.name === currentUser.name &&
                                            values.email === currentUser.email)
                                    }
                                >
                                    Сохранить
                                </button>
                            )}
                        </div>
                    </form>{' '}
                    {showSuccessMessage && (
                        <div className='profile__info'>
                            <p>Профиль успешно сохранен!</p>
                        </div>
                    )}
                    {conflictError && (
                        <div className='profile__error'>
                            <p>{conflictError}</p>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}

export default Profile;
