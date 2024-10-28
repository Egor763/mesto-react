import './PopupAddCard.css';
import { FormAddCard } from './FormAddCard/FormAddCard';
import closeIcon from '../../images/Close Icon.svg';

export function PopupAddCard(props) {
  const { closePopupCard, title, children } = props;
  return (
    <section className='PopupAddCard'>
      <div className='popup__overlay'></div>
      <div className='popup-add-card__container'>
        <button
          onClick={closePopupCard}
          className='popup-add-card__button hover__link'
        >
          <img className='popup-add-card__icon' src={closeIcon} alt='Закрыть' />
        </button>
        <h2 className='popup-add-card__title'>{title}</h2>
        {children}
      </div>
    </section>
  );
}
