import { Routes, Route } from 'react-router-dom';
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
  const userId = '89021c8e-cbe2-4270-9aba-0631277d5564';
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    apiUser.getUser(userId).then((dataUser) => {
      if (dataUser) {
        setCurrentUser(dataUser);
        localStorage.setItem('userId', dataUser.id);
      }
    });
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
