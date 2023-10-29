import { useState } from 'react';

import './Main.css';
// import './MainAdapt.css';
import avatar from '../../images/avatar.png';
import editButton from '../../images/edit-button.svg';
import addButton from '../../images/add-button.svg';
import { PopupWithForm } from '../../components/PopupWithForm/PopupWithForm';

export function Main() {
  const [title, setTitle] = useState('');

  const openProfilePopup = () => {
    setTitle('Редактировать профиль');

    document.querySelector('.popup').classList.add('popup_open');
  };

  const openAddCardPopup = () => {
    setTitle('Новое место');

    document.querySelector('.popup').classList.add('popup_open');
  };

  return (
    <main className='main'>
      <section className='profile page__profile'>
        <div className='profile__info-container'>
          <img
            className='profile__avatar hover__link'
            src={avatar}
            alt='Аватарка'
          />
          <div className='profile__info'>
            <h1 className='profile__title'>Жак-Ив Кусто</h1>
            <p className='profile__proffesion'>Исследователь океана</p>
            <button
              className='profile__edit-button hover__link'
              type='button'
              onClick={openProfilePopup}
            >
              <img
                className='profile__edit-icon'
                src={editButton}
                alt='Кнопка редактирования'
              />
            </button>
          </div>
        </div>

        <button
          className='profile__add-button hover__link'
          type='button'
          onClick={openAddCardPopup}
        >
          <img
            className='profile__add-icon'
            src={addButton}
            alt='Кнопка добавления'
          />
        </button>
      </section>

      <PopupWithForm title={title} />
    </main>
  );
}
