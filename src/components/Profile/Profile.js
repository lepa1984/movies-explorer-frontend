import React from 'react';
import './Profile.css';
import Header from '../Header/Header';

function Profile() {
    return (
        <>
            <Header loggedIn={true} />
            <main className='profile'>
                <div className='container'>
                    <h1 className='profile__title'>Привет, Виталий!</h1>
                    <form className='profile__form'>
                        <label className='profile__label'>
                            <input
                                className='profile__input'
                                type='text'
                                placeholder='Имя'
                                readOnly
                            />
                            <p className='profile__caption'>Виталий</p>
                        </label>
                        <label className='profile__label'>
                            <input
                                className='profile__input'
                                type='text'
                                placeholder='E-mail'
                                readOnly
                            />
                            <p className='profile__caption'>pochta@yandex.ru</p>
                        </label>
                    </form>
                    <div className='profile__buttons'>
                        <button className='profile__button'>
                            Редактировать
                        </button>
                        <button className='profile__button profile__button_logout'>
                            Выйти из аккаунта
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Profile;
