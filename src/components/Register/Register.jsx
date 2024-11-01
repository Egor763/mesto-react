import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Register.css';
import { apiAuth } from '../../api/api-auth';
import { Popup } from '../Popup/Popup';
import ok from '../../images/ok.png';
import errIcon from '../../images/err.png';

export function Register() {
  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [popupContent, setPopupContent] = useState({});

  function handleEmail(evt) {
    const { value } = evt.target;
    setEmail(value);
  }

  function closePopup() {
    setOpenPopup(false);
    if (popupContent.icon === ok) {
      navigate('/');
    }
  }

  function handlePassword(evt) {
    const { value } = evt.target;
    setPassword(value);
  }

  function handleSubmitRegister(evt) {
    evt.preventDefault();
    apiAuth.register(email, password).then((res) => {
      console.log(res);
      if (res) {
        setOpenPopup(true);
        console.log('n');
        if (res.success) {
          setPopupContent({
            text: 'Вы успешно зарегистрировались!',
            icon: ok,
          });
        } else {
          setPopupContent({
            text: 'Что-то пошло не так! Попробуйте ещё раз.',
            icon: errIcon,
          });
        }
      }
    });
  }

  const content = (
    <div className='content'>
      <img className='popup__icon' src={popupContent.icon} alt='Значок' />
      <p className='popup__text'>{popupContent.text}</p>
    </div>
  );

  return (
    <section className='register app__register'>
      <h2 className='register__title'>Регистрация</h2>
      <form onSubmit={handleSubmitRegister} className='register__form'>
        <input
          onChange={handleEmail}
          className='register__input'
          id='input__email'
          type='email'
          placeholder='Email'
        />
        <input
          onChange={handlePassword}
          className='register__input'
          id='input__password'
          type='password'
          placeholder='Пароль'
        />
        <button className='register__button hover__link' type='submit'>
          Сохранить
        </button>
        <Link
          to='/login'
          className='register__button-login hover__link'
          type='button'
        >
          Уже зарегистированы? Войти
        </Link>
      </form>
      {openPopup && <Popup closePopup={closePopup}>{content}</Popup>}
    </section>
  );
}
