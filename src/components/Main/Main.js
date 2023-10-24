import './Main.css';
// import './MainAdapt.css';
import avatar from '../../images/avatar.png';
import editButton from '../../images/edit-button.svg';
import addButton from '../../images/add-button.svg';

export function Main() {
  const openProfilePopup = () => {
    document
      .querySelector('.popup_type_edit-profile')
      .classList.add('popup_open');
  };

  const openAddCardPopup = () => {
    document.querySelector('.popup_type_add-card').classList.add('popup_open');
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
      <section className='popup popup_type_edit-profile'>
        <div className='popup__container'>
          <button
            className='popup__close-button hover__link'
            type='button'
          ></button>
          <h2 className='popup__title'>Редактировать профиль</h2>
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
      <section className='popup popup_type_add-card'>
        <div className='popup__container'>
          <button
            className='popup__close-button hover__link'
            type='button'
          ></button>
          <h2 className='popup__title'>Новое место</h2>
          <form id='form__add-card' className='popup__form' noValidate>
            <label className='form__field'>
              <input
                id='input-add-card__name'
                type='text'
                required
                minLength='2'
                // value=''
                className='popup__input'
                placeholder='Название'
              />
              <span className='input-add-card__name-error popup__input-error'>
                Вы пропустили это поле
              </span>
            </label>
            <label className='form__field'>
              <input
                id='input-add-card__link'
                type='url'
                required
                minLength='2'
                // value=''
                className='popup__input'
                placeholder='Ссылка на картинку'
              />
              <span className='input-add-card__link-error popup__input-error'>
                Введите адрес сайта
              </span>
            </label>
            <button className='form__button hover__link' type='submit'>
              Создать
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
