import './Main.css';
import { useState, useEffect } from 'react';
import { checkToken } from '../../utils/checkToken';
import { apiCards } from '../../api/api-cards';

import { Profile } from '../Profile/Profile';
import { Card } from '../Card/Card';

export function Main() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    apiCards.getCards().then((result) => {
      setCards(result);
    });
  }, []);

  async function fetchAddCard({ title, link }) {
    const access = await checkToken();
    if (access)
      return apiCards.addCard({ title, link }).then((newCard) => {
        if (newCard) {
          setCards([...cards, newCard]);
          return true;
        } else {
          return false;
        }
      });
  }

  async function deleteCard(cardId) {
    const access = await checkToken();

    if (access)
      return apiCards.deleteCard(cardId).then((result) => {
        if (result) {
          const arr = cards.filter((card) => card.id !== cardId);
          setCards(arr);
        }
      });
  }

  return (
    <main className='main'>
      <Profile fetchAddCard={fetchAddCard} />
      <section className='cards'>
        <ul className='cards__container'>
          {cards.map((card) => (
            <Card key={card.id} card={card} deleteCard={deleteCard} />
          ))}
        </ul>
      </section>
    </main>
  );
}
