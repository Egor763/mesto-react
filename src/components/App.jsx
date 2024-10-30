// import react from 'react';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';
import { UserContext } from '../context/user-context';

import './App.css';

function App() {
  const userId = '89021c8e-cbe2-4270-9aba-0631277d5564';
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/users/me/${userId}`, {})
      .then((res) => res.json())
      .then((dataUser) => {
        if (dataUser) {
          setCurrentUser(dataUser);
          localStorage.setItem('userId', dataUser.id);
        }
      });
  }, []);

  return (
    <div className='App'>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Header />
        <Main />
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
