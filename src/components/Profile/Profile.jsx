import { useState } from 'react';

import './Profile.css';
import { Popup } from '../Popup/Popup';
import { PopupAddCard } from '../PopupAddCard/PopupAddCard';
import { PopupAvatar } from '../PopupAvatar/PopupAvatar';

import { FormProfile } from '../Popup/FormProfile/FormProfile';
import { FormAddCard } from '../PopupAddCard/FormAddCard/FormAddCard';
import { FormAvatar } from '../PopupAvatar/FormAvatar/FormAvatar';

import avatar from '../../images/Avatar.png';
import editButton from '../../images/Edit Button.svg';
import addCardButton from '../../images/Add Button.png';

export function Profile() {
  const [openPopupProfile, setOpenPopupProfile] = useState(false);
  const [openPopupAddCard, setOpenPopupAddCard] = useState(false);
  const [openPopupChangeAvatar, setOpenPopupChangeAvatar] = useState(false);

  function openPopup() {
    setOpenPopupProfile(true);
  }

  function openPopupCard() {
    setOpenPopupAddCard(true);
  }

  function openPopupAvatar() {
    setOpenPopupChangeAvatar(true);
  }

  function closePopup() {
    setOpenPopupProfile(false);
  }

  function closePopupCard() {
    setOpenPopupAddCard(false);
  }

  function closePopupAvatar() {
    setOpenPopupChangeAvatar(false);
  }

  return (
    <section className='Profile'>
      <div className='profile__container'>
        <img
          onClick={openPopupAvatar}
          className='profile__image hover__link'
          src={avatar}
          alt='Аватар'
        />
        <div className='profile__info'>
          <h1 className='profile__name'>Жак-Ив Кусто</h1>
          <p className='profile__proffesion'>Исследователь океана</p>
          <button
            onClick={openPopup}
            className='profile__edit-button hover__link'
            type='button'
          >
            <img
              className='profile__edit-icon'
              src={editButton}
              alt='Редактировать'
            />
          </button>
        </div>
      </div>
      <button
        onClick={openPopupCard}
        className='profile__add-card-button hover__link'
        type='button'
      >
        <img
          className='profile__add-card-icon'
          src={addCardButton}
          alt='Кнопка добавления карточки'
        />
      </button>
      {openPopupProfile && (
        <Popup closePopup={closePopup} title='Редактировать профиль'>
          <FormProfile />
        </Popup>
      )}
      {openPopupAddCard && (
        <PopupAddCard closePopupCard={closePopupCard} title='Новое место'>
          <FormAddCard />
        </PopupAddCard>
      )}
      {openPopupChangeAvatar && (
        <PopupAvatar
          closePopupAvatar={closePopupAvatar}
          title='Обновить аватар'
        >
          <FormAvatar />
        </PopupAvatar>
      )}
    </section>
  );
}
