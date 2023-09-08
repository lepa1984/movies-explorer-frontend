import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import React from 'react';
function MoviesCard({
    movie,
    savedMovies,
    addToSavedMovies,
    deleteSavedMovies,
}) {
    const { pathname } = useLocation();
    const isSaveButton = pathname === '/movies';
    const isDeleteButton = pathname === '/saved-movies';

    const imageUrl = movie.image.url
        ? `https://api.nomoreparties.co/${movie.image.url}`
        : movie.image;
    const isSavedFilm = savedMovies
        ? savedMovies.some((i) => i.movieId === movie.id)
        : false;
    const infoSaveFilm = savedMovies
        ? savedMovies.find((i) => i.movieId === movie.id)
        : null;
    function converterMinuteHour(min) {
        let hours = Math.floor(min / 60);
        let minutes = min % 60;

        if (hours === 0) {
            return `${minutes}м`;
        } else {
            return `${hours}ч ${minutes > 0 ? `${minutes}м` : ''}`;
        }
    }

    return (
        <article className='card'>
            <img className='card__image' src={imageUrl} alt='Изображение' />
            <div className='card__wrapper'>
                <h3 className='card__title' title={movie.nameRU}>
                    {movie.nameRU}
                </h3>
                {/* {isSaveButton && (
                    <button
                        className={`card__button ${
                            isSavedFilm ? 'card__like_active' : 'card__like'
                        }`}
                        type='button'
                        aria-label='Сохранить'
                        onClick={addToSavedMovies(
                            movie,
                            isSavedFilm,
                            infoSaveFilm
                        )}
                    />
                )}
                {isDeleteButton && (
                    <button
                        type='button'
                        className='card__button card__delete'
                        aria-label='Удалить'
                        onClick={deleteSavedMovies(movie)}
                    />
                )} */}

                <p className='card__duration'>
                    {converterMinuteHour(movie.duration)}
                </p>
            </div>
        </article>
    );
}

export default MoviesCard;
