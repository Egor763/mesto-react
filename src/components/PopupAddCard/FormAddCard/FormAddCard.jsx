import { useState, useContext } from 'react';
import { apiCards } from '../../../api/api-cards';
import { checkToken } from '../../../utils/checkToken';

import './FormAddCard.css';

export function FormAddCard(props) {
  const { closePopup, fetchAddCard } = props;
  const [title, setTitle] = useState();
  const [link, setLink] = useState();

  function handleChangeTitle(e) {
    const { value } = e.target;
    setTitle(value);
  }

  function handleChangeLink(e) {
    const { value } = e.target;
    setLink(value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await fetchAddCard({ title, link });

    if (result) {
      closePopup();
    }
  }

  return (
    <form onSubmit={handleSubmit} className='FormAddCard'>
      <input
        onChange={handleChangeTitle}
        className='form__input'
        id='input__name'
        type='text'
        placeholder='Название'
      />
      <input
        onChange={handleChangeLink}
        className='form__input'
        id='input__proffesion'
        type='text'
        placeholder='Ссылка на картинку'
      />
      <button className='form__button hover__link' type='submit'>
        Создать
      </button>
    </form>
  );
}
