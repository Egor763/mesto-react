import './Login.css';

export function Login() {
  return (
    <section className='login'>
      <h2 className='login__title'>Вход</h2>
      <form className='login__form'>
        <input
          className='login__input'
          id='input__email'
          type='email'
          placeholder='Email'
        />
        <input
          className='login__input'
          id='input__password'
          type='password'
          placeholder='Пароль'
        />
        <button className='login__button hover__link' type='button'>
          Войти
        </button>
      </form>
    </section>
  );
}
