import React, { useState, useEffect } from 'react';
import './SearchForm.css';

const SearchForm = ({ isShortMovies, allFilterMovies, onFilterMovies }) => {
    const [searchRequest, setSearchRequest] = useState('');
    const [searchError, setSearchError] = useState(false);

    function onSubmitForm(e) {
        e.preventDefault();
        if (searchRequest.trim().length === 0) {
            setSearchError(true);
        } else {
            setSearchError(false);
            allFilterMovies(searchRequest);
        }
    }

    function handleChangeInput(e) {
        setSearchRequest(e.target.value);
    }

    useEffect(() => {
        if (localStorage.getItem('movieSearch')) {
            const localSearchRequest = localStorage.getItem('movieSearch');
            setSearchRequest(localSearchRequest);
        }
    }, []);

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
                            onChange={handleChangeInput}
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
            </div>
        </section>
    );
};

export default SearchForm;
