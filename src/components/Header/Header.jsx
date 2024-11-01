import './Header.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип' />
      <Link to='/login' className='header__login hover__link' type='button'>
        Войти
      </Link>
    </header>
  );
}
