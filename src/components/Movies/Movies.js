import { useState, useEffect } from 'react';

import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import moviesApi from '../../utils/MoviesApi';

const Movies = ({
    isLoggedIn,
    addToSavedMovies,
    deleteSavedMovies,
    savedMovies,
}) => {
    const [shortMovies, setShortMovies] = useState(false);
    const [initialMovies, setInitialMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    function filterShortMovies(movies) {
        return movies.filter((movie) => movie.duration <= 40);
    }
    function filterMovies(movies, query) {
        const moviesQuery = movies.filter((movie) => {
            const movieRU = String(movie.nameRU).toLowerCase().trim();
            const movieEN = String(movie.nameEN).toLowerCase().trim();
            const userQuery = query.toLowerCase().trim();
            return (
                movieRU.indexOf(userQuery) !== -1 ||
                movieEN.indexOf(userQuery) !== -1
            );
        });
        return moviesQuery;
    }
    function handleShortMovieToggle() {
        setShortMovies(!shortMovies);

        if (!shortMovies) {
            if (filterShortMovies(initialMovies).length === 0) {
                setFilteredMovies(filterShortMovies(initialMovies));
            } else {
                setFilteredMovies(filterShortMovies(initialMovies));
            }
        } else {
            setFilteredMovies(initialMovies);
        }
        localStorage.setItem('shortMovies', !shortMovies);
    }

    function updateFilteredMoviesList(movies, query, short) {
        const moviesCardList = filterMovies(movies, query);
        setInitialMovies(moviesCardList);
        setFilteredMovies(
            short ? filterShortMovies(moviesCardList) : moviesCardList
        );
        localStorage.setItem('movies', JSON.stringify(moviesCardList));
        localStorage.setItem('allMovies', JSON.stringify(movies));
    }

    function allFilterMovies(query) {
        localStorage.setItem('movieSearch', query);
        localStorage.setItem('shortMovies', shortMovies);
        setIsLoading(true);
        if (localStorage.getItem('allMovies')) {
            const movies = JSON.parse(localStorage.getItem('allMovies'));
            updateFilteredMoviesList(movies, query, shortMovies);
            setIsLoading(false);
        } else {
            moviesApi
                .getMovies()
                .then((moviesData) => {
                    updateFilteredMoviesList(moviesData, query, shortMovies);
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setIsLoading(false);
                });
        }
    }

    useEffect(() => {
        const query = localStorage.getItem('shortMovies');
        if (query === 'true') {
            setShortMovies(true);
        } else {
            setShortMovies(false);
        }
    }, []);

    useEffect(() => {
        const query = localStorage.getItem('movieSearch');
        if (query) {
            if (filteredMovies.length === 0) {
                setNotFound(true);
            } else {
                setNotFound(false);
            }
        }
    }, [filteredMovies, notFound]);

    useEffect(() => {
        const queryShort = localStorage.getItem('shortMovies');
        const query = localStorage.getItem('movies');
        if (query) {
            const movies = JSON.parse(localStorage.getItem('movies'));
            setInitialMovies(movies);

            if (queryShort === 'true') {
                setFilteredMovies(filterShortMovies(movies));
            } else {
                setFilteredMovies(movies);
            }
        }
    }, []);

    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <main>
                <SearchForm
                    allFilterMovies={allFilterMovies}
                    shortMovies={shortMovies}
                    onFilterMovies={handleShortMovieToggle}
                    filteredMovies={filteredMovies}
                    notFound={notFound}
                />
                {isLoading ? (
                    <Preloader />
                ) : (
                    <MoviesCardList
                        movies={filteredMovies}
                        isSavedMovies={false}
                        savedMovies={savedMovies}
                        addToSavedMovies={addToSavedMovies}
                        deleteSavedMovies={deleteSavedMovies}
                        notFound={notFound}
                    />
                )}
            </main>
            <Footer />
        </>
    );
};

export default Movies;
