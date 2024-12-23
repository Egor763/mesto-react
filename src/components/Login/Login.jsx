import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import './Login.css';
import { UserContext } from '../../context/user-context';
import { apiAuth } from '../../api/api-auth';

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setCurrentUser } = useContext(UserContext);

  function handleEmail(evt) {
    const { value } = evt.target;
    setEmail(value);
  }

  function handlePassword(evt) {
    const { value } = evt.target;
    setPassword(value);
  }

  function handleSubmitLogin(evt) {
    evt.preventDefault();

    apiAuth.login(email, password).then((res) => {
      if (res) {
        if (res.success) {
          setCurrentUser(res.user);

          localStorage.setItem('userId', res.user.id);
          localStorage.setItem('refresh_token', res.refresh_token);
          localStorage.setItem('access_token', res.access_token);

          navigate('/');
        } else {
          // TODO обработка ошибки регистрации
        }
      }
    });
  }

  return (
    <section className='login'>
      <h2 className='login__title'>Вход</h2>
      <form onSubmit={handleSubmitLogin} className='login__form'>
        <input
          onChange={handleEmail}
          className='login__input'
          id='input__email'
          type='email'
          placeholder='Email'
        />
        <input
          onChange={handlePassword}
          className='login__input'
          id='input__password'
          type='password'
          placeholder='Пароль'
        />
        <button className='login__button hover__link' type='submit'>
          Войти
        </button>
      </form>
    </section>
  );
}
