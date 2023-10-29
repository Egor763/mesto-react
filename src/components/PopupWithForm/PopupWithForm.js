import { useCallback, useEffect } from 'react';

import './PopupWithForm.css';

export function PopupWithForm(props) {
  const { title } = props;

  const handleEscClose = useCallback((e) => {
    if (e.key === 'Escape') {
      closePopup();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [handleEscClose]);

  function closePopup() {
    const popup = document.querySelector('.popup');

    setTimeout(() => {
      if (popup.classList.contains('popup_open')) {
        popup.style.display = 'none';
      }
    }, 300);
    popup.classList.remove('popup_open');
  }

  const handleClosePopup = (event) => {
    if (
      event.target.classList.contains('popup__close-button') ||
      event.target === event.currentTarget
    ) {
      closePopup();
    }
  };

  return (
    <section
      className='popup popup_type_edit-profile'
      onClick={handleClosePopup}
    >
      <div className='popup__container'>
        <button
          className='popup__close-button hover__link'
          type='button'
        ></button>
        <h2 className='popup__title'>{title}</h2>
        <form id='form__profile' className='popup__form' noValidate>
          <label className='form__field'>
            <input
              id='input__name-edit-profile'
              type='text'
              className='popup__input'
              minLength='2'
              required
              // value=''
              placeholder='Жак-Ив-Кусто'
            />
            <span className='input__name-edit-profile-error popup__input-error'>
              Вы пропустили это поле
            </span>
          </label>
          <label className='form__field'>
            <input
              id='input__proffesion-edit-profile'
              type='text'
              minLength='2'
              required
              // value=''
              className='popup__input'
              placeholder='Исследователь океана'
            />
            <span className='input__proffesion-edit-profile-error popup__input-error'>
              Вы пропустили это поле
            </span>
          </label>
          <button className='form__button hover__link' type='submit'>
            Сохранить
          </button>
        </form>
      </div>
    </section>
  );
}
