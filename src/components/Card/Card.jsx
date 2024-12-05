import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../context/user-context';
import { checkToken } from '../../utils/checkToken';
import { apiCards } from '../../api/api-cards';

import './Card.css';

import basket from '../../images/basket.svg';
import like from '../../images/Group.svg';
import likeActive from '../../images/like-active.svg';

export function Card(props) {
  const { deleteCard, card } = props;
  const { currentUser } = useContext(UserContext);

  const [isLiked, setIsLiked] = useState(false);

  const iconLike = isLiked ? likeActive : like;

  useEffect(() => {
    if (currentUser)
      setIsLiked(card.likes.some((item) => item === currentUser.id));
  }, [card, currentUser]);

  function handleBasket() {
    if (currentUser && currentUser.id === card.owner) {
      return true;
    } else {
      return false;
    }
  }

  async function setLikes(cardId) {
    const access = await checkToken();

    if (access) {
      if (isLiked) {
        return apiCards.deleteLikes(cardId).then((res) => {
          if (res.success) {
            setIsLiked(false);
          } else {
            setIsLiked(true);
          }
        });
      } else {
        return apiCards.addLikes(cardId).then((res) => {
          if (res.success) {
            setIsLiked(true);
          } else {
            setIsLiked(false);
          }
        });
      }
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
        <button
          onClick={() => setLikes(card.id)}
          className='card__like hover__link'
          type='button'
        >
          <img className='card__like-image' src={iconLike} alt='Лайк' />
        </button>
      </div>
    </li>
  );
}
