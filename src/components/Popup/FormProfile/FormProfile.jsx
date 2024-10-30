import { useState, useContext } from 'react';
import { UserContext } from '../../../context/user-context';
import './FormProfile.css';

export function FormProfile(props) {
  const { closePopup } = props;
  const [name, setName] = useState();
  const [about, setAbout] = useState();

  const { setCurrentUser } = useContext(UserContext);

  function handleChangeName(e) {
    const { value } = e.target;
    setName(value);
  }

  function handleChangeAbout(e) {
    const { value } = e.target;
    setAbout(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchEditProfile();
  }

  function fetchEditProfile() {
    const userId = localStorage.getItem('userId');

    if (userId)
      fetch(`http://127.0.0.1:8000/api/users/me/${userId}`, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, about }),
      })
        .then((res) => res.json())
        .then((newUser) => {
          setCurrentUser(newUser);
          closePopup();
        });
  }

  return (
    <form onSubmit={handleSubmit} className='FormProfile'>
      <input
        className='form__input'
        id='input__name'
        type='text'
        placeholder='Имя'
        onChange={handleChangeName}
        name='name'
      />
      <input
        className='form__input'
        id='input__proffesion'
        type='text'
        placeholder='Профессия'
        onChange={handleChangeAbout}
        name='about'
      />
      <button className='form__button hover__link' type='submit'>
        Сохранить
      </button>
    </form>
  );
}
