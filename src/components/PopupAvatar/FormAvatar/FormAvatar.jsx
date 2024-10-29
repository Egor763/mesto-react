import './FormAvatar.css';

export function FormAvatar() {
  return (
    <form className='FormAvatar'>
      <input
        className='popup-avatar-form__input'
        id='input__avatar'
        type='text'
        placeholder='Ссылка на аватар'
      />
      <button className='popup-avatar-form__button hover__link' type='button'>
        Сохранить
      </button>
    </form>
  );
}
