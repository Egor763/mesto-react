import './FormProfile.css';

export function FormProfile() {
  return (
    <form className='FormProfile'>
      <input
        className='form__input'
        id='input__name'
        type='text'
        placeholder='Имя'
      />
      <input
        className='form__input'
        id='input__proffesion'
        type='text'
        placeholder='Профессия'
      />
      <button className='form__button hover__link' type='button'>
        Сохранить
      </button>
    </form>
  );
}
