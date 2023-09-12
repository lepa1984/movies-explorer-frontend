import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
    movies,
    isSavedMovies,
    savedMovies,
    deleteSavedMovies,
    addToSavedMovies,
}) {
    const [displayedMovies, setDisplayedMovies] = useState(0);
    const { pathname } = useLocation();

    function getMovieFromSaved(savedMovies, movie) {
        return savedMovies.find(
            (savedMovie) => savedMovie.movieId === movie.id
        );
    }

    function setDisplayedMoviesCount() {
        const display = window.innerWidth;
        if (display > 1025) {
            setDisplayedMovies(16);
        } else if (display > 768) {
            setDisplayedMovies(8);
        } else {
            setDisplayedMovies(5);
        }
    }

    function expandMoviesDisplay() {
        const display = window.innerWidth;
        if (display >= 1280) {
            setDisplayedMovies(displayedMovies + 4);
        } else if (display >= 768) {
            setDisplayedMovies(displayedMovies + 2);
        } else {
            setDisplayedMovies(displayedMovies + 1);
        }
    }

    useEffect(() => {
        let resizeTimeout;

        function handleResize() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                setDisplayedMoviesCount();
            }, 100);
        }
        setDisplayedMoviesCount();
        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(resizeTimeout);
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <section className='movies-cards'>
            <div className='container'>
                {pathname === '/saved-movies' ? (
                    <div className='movies-cards__list'>
                        {movies.map((movie) => {
                            return (
                                <MoviesCard
                                    key={isSavedMovies ? movie._id : movie.id}
                                    saved={getMovieFromSaved(
                                        savedMovies,
                                        movie
                                    )}
                                    movies={movies}
                                    movie={movie}
                                    deleteSavedMovies={deleteSavedMovies}
                                    isSavedMovies={isSavedMovies}
                                    addToSavedMovies={addToSavedMovies}
                                    savedMovies={savedMovies}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <>
                        <div className='movies-cards__list'>
                            {movies.slice(0, displayedMovies).map((movie) => {
                                return (
                                    <MoviesCard
                                        key={
                                            isSavedMovies ? movie._id : movie.id
                                        }
                                        saved={getMovieFromSaved(
                                            savedMovies,
                                            movie
                                        )}
                                        movies={movies}
                                        movie={movie}
                                        deleteSavedMovies={deleteSavedMovies}
                                        isSavedMovies={isSavedMovies}
                                        addToSavedMovies={addToSavedMovies}
                                        savedMovies={savedMovies}
                                    />
                                );
                            })}
                        </div>
                        {movies.length > displayedMovies ? (
                            <button
                                onClick={expandMoviesDisplay}
                                className={`movies-cards__button${
                                    pathname === '/saved-movies'
                                        ? '_hidden'
                                        : ''
                                }`}
                            >
                                Ещё
                            </button>
                        ) : (
                            ''
                        )}
                    </>
                )}
            </div>
        </section>
    );
}

export default MoviesCardList;
