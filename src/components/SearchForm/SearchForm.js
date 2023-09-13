import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import { useLocation } from 'react-router-dom';
const SearchForm = ({
    isShortMovies,
    allFilterMovies,
    onFilterMovies,
    notFound,
}) => {
    const location = useLocation();
    const [searchRequest, setSearchRequest] = useState('');
    const [searchError, setSearchError] = useState(false);

    useEffect(() => {
        if (location.pathname === '/movies') {
            localStorage.setItem('movieSearch', searchRequest);
        }
    }, [searchRequest, location]);

    function onSubmitForm(e) {
        e.preventDefault();
        if (searchRequest.trim().length === 0) {
            setSearchError(true);
        } else {
            setSearchError(false);
            allFilterMovies(searchRequest);
        }
    }

    function changeInput(e) {
        setSearchRequest(e.target.value);
    }

    useEffect(() => {
        if (
            localStorage.getItem('movieSearch') &&
            location.pathname === '/movies'
        ) {
            const localSearchRequest = localStorage.getItem('movieSearch');
            setSearchRequest(localSearchRequest);
        }
    }, [location]);

    return (
        <section className='search-form'>
            <div className='container'>
                <form
                    className='search-form__form'
                    name='search'
                    onSubmit={onSubmitForm}
                >
                    <div className='search-form__wrapper'>
                        <input
                            className='search-form__input'
                            type='search'
                            name='search'
                            placeholder='Фильм'
                            autoComplete='off'
                            required
                            value={searchRequest || ''}
                            onChange={changeInput}
                        />
                        <button
                            className='search-form__button '
                            aria-label='Поиск'
                        />
                    </div>
                    <label className='search-form__checkbox'>
                        <input
                            type='checkbox'
                            onChange={onFilterMovies}
                            checked={isShortMovies}
                        />
                        <span />
                        <p>Короткометражки</p>
                    </label>
                </form>
                {searchError ? (
                    <span className='search__error'>
                        Нужно ввести ключевое слово!
                    </span>
                ) : notFound ? (
                    <span className='search__error'>Ничего не найдено!</span>
                ) : (
                    ''
                )}
            </div>
        </section>
    );
};

export default SearchForm;
