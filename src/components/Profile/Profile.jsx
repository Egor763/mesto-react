import { memo, useState, useEffect, useContext } from 'react';

import './Profile.css';
import { Popup } from '../Popup/Popup';

import { FormProfile } from '../Popup/FormProfile/FormProfile';
import { FormAddCard } from '../PopupAddCard/FormAddCard/FormAddCard';
import { FormAvatar } from '../PopupAvatar/FormAvatar/FormAvatar';

import avatar from '../../images/Avatar.png';
import editButton from '../../images/Edit Button.svg';
import addCardButton from '../../images/Add Button.png';
import { UserContext } from '../../context/user-context';

export const Profile = memo(() => {
  const { currentUser } = useContext(UserContext);

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
    <section className='profile'>
      <div className='profile__container'>
        <img
          onClick={openPopupAvatar}
          className='profile__image hover__link'
          src={currentUser ? currentUser.avatar : avatar}
          alt='Аватар'
        />
        <div className='profile__info'>
          <h1 className='profile__name'>
            {currentUser ? currentUser.name : 'Жак-Ив-Кусто'}
          </h1>
          <p className='profile__proffesion'>
            {currentUser ? currentUser.about : 'Исследователь океана'}
          </p>
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
          <FormProfile closePopup={closePopup} />
        </Popup>
      )}
      {openPopupAddCard && (
        <Popup closePopup={closePopupCard} title='Новое место'>
          <FormAddCard />
        </Popup>
      )}
      {openPopupChangeAvatar && (
        <Popup closePopup={closePopupAvatar} title='Обновить аватар'>
          <FormAvatar />
        </Popup>
      )}
    </section>
  );
});
