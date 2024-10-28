import './FormAddCard.css';

export function FormAddCard() {
  return (
    <form className='FormAddCard'>
      <input
        className='form__input'
        id='input__name'
        type='text'
        placeholder='Название'
      />
      <input
        className='form__input'
        id='input__proffesion'
        type='text'
        placeholder='Ссылка на картинку'
      />
      <button className='form__button' type='button'>
        Создать
      </button>
    </form>
  );
}
