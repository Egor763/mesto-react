import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { apiUser } from '../api/api-users';
import { Register } from './Register/Register';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';
import { UserContext } from '../context/user-context';

import './App.css';
import { Login } from './Login/Login';

function App() {
  const userId = localStorage.getItem('userId');
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      console.log('i');
      apiUser.getUser(userId).then((dataUser) => {
        if (dataUser) {
          console.log(dataUser);
          setCurrentUser(dataUser);
          localStorage.setItem('userId', dataUser.id);
        }
      });
    } else {
      navigate('/register');
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
