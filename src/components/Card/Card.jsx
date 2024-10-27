import './Card.css';

import basket from '../../images/basket.svg';

export function Card({ card }) {
  return (
    <li className='Card'>
      <img className='card__image' src={card.image} alt={card.title} />
      <button className='card__basket hover__link' type='button'>
        <img className='card__basket-image' src={basket} alt='Корзина' />
      </button>
      <div className='card__container'>
        <h2 className='card__title'>{card.name}</h2>
        <button className='card__like hover__link' type='button'>
          <img className='card__like-image' />
        </button>
      </div>
    </li>
  );
}
