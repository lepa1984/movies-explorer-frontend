import './MoviesCard.css';

function MoviesCard({ card, cardId, isSavedMovies }) {
    const handleClickLike = (e) => {
        e.target.classList.toggle('card__like_active');
    };
    return (
        <article className='card' key={cardId}>
            {' '}
            <img className='card__image' src={card.link} alt={card.name} />
            <div className='card__wrapper'>
                <h3 className='card__title' title={card.name}>
                    {card.name}
                </h3>
                {isSavedMovies ? (
                    <button
                        className='card__delete card__button'
                        aria-label='Удалить'
                    />
                ) : (
                    <button
                        className='card__like card__button'
                        aria-label='Сохранить'
                        onClick={handleClickLike}
                    />
                )}
                <p className='card__duration'>{card.duration}</p>
            </div>
        </article>
    );
}

export default MoviesCard;
