import './Main.css';
import { useState, useEffect } from 'react';

import { Profile } from '../Profile/Profile';
// import { cards } from '../../constants/cards';
import { Card } from '../Card/Card';

export function Main() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/cards', {})
      .then((res) => res.json())
      .then((result) => {
        setCards(result);
        console.log(result);
      });
  }, []);

  return (
    <main className='main'>
      <Profile />
      <section className='cards'>
        <ul className='cards__container'>
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </ul>
      </section>
    </main>
  );
}
