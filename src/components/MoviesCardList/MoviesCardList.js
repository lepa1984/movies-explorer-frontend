import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import cards from '../../utils/constants';

function MoviesCardList({ isSavedMovies }) {
    return (
        <section className='movies-cards'>
            <div className='container'>
                <div className='movies-cards__list'>
                    {cards.map((card, index) => (
                        <MoviesCard
                            card={card}
                            cardId={index}
                            isSavedMovies={isSavedMovies}
                        />
                    ))}
                </div>
                <button className='movies-cards__button'>Ещё</button>
            </div>
        </section>
    );
}

export default MoviesCardList;
