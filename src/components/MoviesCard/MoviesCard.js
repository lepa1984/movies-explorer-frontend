import './MoviesCard.css';
 
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
                        className='card__button card__delete'
                        type='button'
                        onClick={deleteSavedMovies(movie)}
                    />
                ) : saved && !isSavedMovies ? (
                    <button
                        className='card__button card__like card__like_active'
                        type='button'
                        onClick={onClickMovie}
                    />
                ) : (
                    <button
                        className='card__button card__like'
                        onClick={onClickMovie}
                        type='button'
                    ></button>
                )}
                <p className='card__duration'>
                    {converterMinuteHour(movie.duration)}
                </p>
            </div>
        </article>
    );
}

export default MoviesCard;
