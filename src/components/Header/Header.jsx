import './Header.css';
import logo from '../../images/logo.png';

export function Header() {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип' />
    </header>
  );
}
