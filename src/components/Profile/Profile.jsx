import './Profile.css';
import avatar from '../../images/Avatar.png';
import editButton from '../../images/Edit Button.svg';
import addCardButton from '../../images/Add Button.png';

export function Profile() {
  return (
    <section className='Profile'>
      <div className='profile__container'>
        <img className='profile__image' src={avatar} alt='Аватар' />
        <div className='profile__info'>
          <h1 className='profile__name'>Жак-Ив Кусто</h1>
          <p className='profile__proffesion'>Исследователь океана</p>
          <button className='profile__edit-button hover__link' type='button'>
            <img
              className='profile__edit-icon'
              src={editButton}
              alt='Редактировать'
            />
          </button>
        </div>
      </div>
      <button className='profile__add-card-button hover__link' type='button'>
        <img
          className='profile__add-card-icon'
          src={addCardButton}
          alt='Кнопка добавления карточки'
        />
      </button>
    </section>
  );
}
