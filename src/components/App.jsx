import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useJwt } from 'react-jwt';

import { apiUser } from '../api/api-users';
import { Register } from './Register/Register';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';
import { UserContext } from '../context/user-context';

import './App.css';
import { Login } from './Login/Login';
import { checkToken } from '../utils/checkToken';

function App() {
  const userId = localStorage.getItem('userId');
  const [currentUser, setCurrentUser] = useState(null);
  const accessToken = localStorage.getItem('access_token');

  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      const isExpired = checkToken();
      console.log('isExpired:', isExpired);

      if (isExpired) {
        apiUser.refreshToken().then((token) => {
          console.log(token);
        });
      } else {
        apiUser.getUser().then((dataUser) => {
          if (dataUser) {
            console.log(dataUser);
            setCurrentUser(dataUser);
          }
        });
      }
    } else {
      navigate('/login');
    }
  }, []);

  return (
    <div className='app'>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />

          {/* <Main /> */}
        </Routes>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
