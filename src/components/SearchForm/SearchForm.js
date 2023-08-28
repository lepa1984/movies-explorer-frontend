import './SearchForm.css';

const SearchForm = () => (
    <section className='search-form'>
        <div className='container'>
            <form className='search-form__form' name='search'>
                <div className='search-form__wrapper'>
                    <input
                        className='search-form__input'
                        type='search'
                        name='search'
                        placeholder='Фильм'
                        autoComplete='off'
                        required
                    />
                    <button
                        className='search-form__button '
                        aria-label='Поиск'
                    />
                </div>
                <label className='search-form__checkbox'>
                    <input type='checkbox' />
                    <span />
                    <p>Короткометражки</p>
                </label>
            </form>
        </div>
    </section>
);

export default SearchForm;
