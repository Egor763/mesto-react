import { useEffect } from 'react';

import './Popup.css';

import closeButton from '../../images/Close Icon.svg';

export function Popup(props) {
  const { closePopup, title, children } = props;

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        closePopup();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <section className='popup'>
      <div onClick={closePopup} className='overlay'></div>
      <div className='popup__container'>
        <button
          onClick={closePopup}
          className='popup__close-button hover__link'
          type='button'
        >
          <img className='popup__close-icon' src={closeButton} alt='Закрыть' />
        </button>
        <h2 className='popup__title'>{title}</h2>

        {children}
      </div>
    </section>
  );
}
