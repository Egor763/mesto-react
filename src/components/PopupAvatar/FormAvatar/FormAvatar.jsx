import { useState, useContext } from 'react';
import { UserContext } from '../../../context/user-context';
import { apiUser } from '../../../api/api-users';

import './FormAvatar.css';

export function FormAvatar(props) {
  const { closePopup } = props;
  const [link, setLink] = useState();
  const { setCurrentUser } = useContext(UserContext);

  function handleChangeLink(evt) {
    const { value } = evt.target;
    setLink(value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    fetchAvatar();
  }

  function fetchAvatar() {
    const userId = localStorage.getItem('userId');

    if (userId) {
      apiUser.updateAvatar(userId, link).then((newUser) => {
        setCurrentUser(newUser);
        closePopup();
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className='FormAvatar'>
      <input
        className='popup-avatar-form__input'
        id='input__avatar'
        type='text'
        placeholder='Ссылка на аватар'
        onChange={handleChangeLink}
      />
      <button className='popup-avatar-form__button hover__link' type='submit'>
        Сохранить
      </button>
    </form>
  );
}
