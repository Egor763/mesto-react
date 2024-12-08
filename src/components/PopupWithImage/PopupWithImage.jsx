import { useEffect } from 'react';

import './PopupWithImage.css';

import closeButton from '../../images/Close Icon.svg';

export function PopupWithImage(props) {
  const { card, closePopupImage } = props;

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        closePopupImage();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <section className='popup-image'>
      <div onClick={closePopupImage} className='popup__overlay'></div>
      <div className='popup-image__container'>
        <button className='popup-image__btn'>
          <img
            onClick={closePopupImage}
            className='popup-image__icon hover__link'
            src={closeButton}
            alt='Кнопка закрытия'
          />
        </button>
        <img className='popup__image' src={card.link} alt='Картинка' />
        <p className='popup-image__title'>{card.title}</p>
      </div>
    </section>
  );
}
