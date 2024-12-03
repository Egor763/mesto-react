import { useContext } from 'react';
import { UserContext } from '../../context/user-context';

import './Card.css';

import basket from '../../images/basket.svg';
import like from '../../images/Group.svg';

export function Card(props) {
  const { deleteCard, card } = props;
  const { currentUser } = useContext(UserContext);

  console.log(currentUser);
  console.log(card);

  function handleBasket() {
    if (currentUser && currentUser.id === card.owner) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <li className='card'>
      <img className='card__image' src={card.link} alt={card.title} />
      {handleBasket() && (
        <button
          onClick={() => deleteCard(card.id)}
          className='card__basket hover__link'
          type='button'
        >
          <img className='card__basket-image' src={basket} alt='Корзина' />
        </button>
      )}
      <div className='card__container'>
        <h2 className='card__title'>{card.title}</h2>
        <button className='card__like hover__link' type='button'>
          <img className='card__like-image' src={like} alt='Лайк' />
        </button>
      </div>
    </li>
  );
}
