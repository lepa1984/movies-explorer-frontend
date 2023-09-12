import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';

import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies({ isLoggedIn, deleteSavedMovies, savedMovies }) {
    const [filteredMovies, setFilteredMovies] = useState(savedMovies);
    const [searchRequest, setSearchRequest] = useState('');
    const [shortMovies, setShortMovies] = useState(false);
    const [notFound, setNotFound] = useState(false);
    function filterShortMovies(movies) {
        return movies.filter((movie) => movie.duration <= 40);
    }
    function allFilterMovies(request) {
        setSearchRequest(request);
    }

    function handleShortMovieToggle() {
        setShortMovies(!shortMovies);
    }

    useEffect(() => {
        if (filteredMovies.length === 0) {
            setNotFound(true);
        } else {
            setNotFound(false);
        }
    }, [filteredMovies]);

    useEffect(() => {
        const movieList = filterMovies(savedMovies, searchRequest);
        setFilteredMovies(
            shortMovies ? filterShortMovies(movieList) : movieList
        );
    }, [savedMovies, shortMovies, searchRequest]);

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
    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <main>
                <SearchForm
                    onFilterMovies={handleShortMovieToggle}
                    allFilterMovies={allFilterMovies}
                    filteredMovies={filteredMovies}
                    notFound={notFound}
                />
                <MoviesCardList
                    movies={filteredMovies}
                    isSavedMovies={true}
                    notFound={notFound}
                    savedMovies={savedMovies}
                    deleteSavedMovies={deleteSavedMovies}
                />
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;
