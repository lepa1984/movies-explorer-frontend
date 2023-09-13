import React from 'react';
import './NotFoundPage.css';
import { useNavigate } from 'react-router-dom';
function NotFound() {
    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
    };
    return (
        <main className='not-found'>
            <div className='container'>
                <h2 className='not-found__title'>404</h2>
                <p className='not-found__text'>Страница не найдена</p>
                <button className='not-found__button' onClick={back}>
                    Назад
                </button>
            </div>
        </main>
    );
}

export default NotFound;
