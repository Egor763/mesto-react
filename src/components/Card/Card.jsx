import './Card.css';

import basket from '../../images/basket.svg';
import like from '../../images/Group.svg';

export function Card({ card }) {
  return (
    <li className='card'>
      <img className='card__image' src={card.link} alt={card.title} />
      <button className='card__basket hover__link' type='button'>
        <img className='card__basket-image' src={basket} alt='Корзина' />
      </button>
      <div className='card__container'>
        <h2 className='card__title'>{card.title}</h2>
        <button className='card__like hover__link' type='button'>
          <img className='card__like-image' src={like} alt='Лайк' />
        </button>
      </div>
    </li>
  );
}
