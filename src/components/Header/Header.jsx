import './Header.css';
import logo from '../../images/logo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/user-context';

export function Header() {
  const { navigate } = useNavigate();
  const { currentUser } = useContext(UserContext);
  const { setCurrentUser } = useContext(UserContext);
  const { pathname } = useLocation();

  function logoutUser() {
    localStorage.removeItem('userId');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setCurrentUser(null);
    navigate('/login');
  }

  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип' />
      {pathname === '/' ? (
        <div>
          <Link to='/login' className='header__login hover__link'>
            {currentUser && currentUser.email ? currentUser.email : 'Войти'}
          </Link>
          <Link onClick={logoutUser} className='header__logout hover__link'>
            Выйти
          </Link>
        </div>
      ) : (
        <Link
          to={pathname === '/register' ? '/login' : '/register'}
          className='header__login hover__link'
        >
          {pathname === '/register' ? 'Войти' : 'Регистрация'}
        </Link>
      )}
    </header>
  );
}
