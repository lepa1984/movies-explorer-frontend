import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import React from 'react';
function MoviesCard({
    movie,
    savedMovies,
    addToSavedMovies,
    deleteSavedMovies,
    isSavedMovies,
    saved,
}) {
    const imageUrl = isSavedMovies
        ? movie.image
        : `https://api.nomoreparties.co/${movie.image.url}`;

    function converterMinuteHour(min) {
        let hours = Math.floor(min / 60);
        let minutes = min % 60;

        if (hours === 0) {
            return `${minutes}м`;
        } else {
            return `${hours}ч ${minutes > 0 ? `${minutes}м` : ''}`;
        }
    }
    function onClickMovie() {
        if (saved) {
            deleteSavedMovies(
                savedMovies.filter((m) => m.movieId === movie.id)[0]
            );
        } else {
            addToSavedMovies(movie);
        }
    }
    return (
        <article className='card'>
            <img className='card__image' src={imageUrl} alt={movie.nameRU} />
            <div className='card__wrapper'>
                <h3 className='card__title' title={movie.nameRU}>
                    {movie.nameRU}
                </h3>
                {isSavedMovies ? (
                    <button
                        type='button'
                        className='card__button card__delete'
                        aria-label='Удалить'
                        onClick={deleteSavedMovies(movie)}
                    />
                ) : (
                    <button
                        className={`card__button ${
                            isSavedMovies ? 'card__like_active' : 'card__like'
                        }`}
                        type='button'
                        aria-label='Сохранить'
                        onClick={onClickMovie}
                    />
                )}

                <p className='card__duration'>
                    {converterMinuteHour(movie.duration)}
                </p>
            </div>
        </article>
    );
}

export default MoviesCard;
