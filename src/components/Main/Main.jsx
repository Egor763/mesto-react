import './Main.css';

import { Profile } from '../Profile/Profile';
import { cards } from '../../constants/cards';
import { Card } from '../Card/Card';

export function Main() {
  return (
    <main className='main'>
      <Profile />
      <section className='cards'>
        <ul className='cards__container'>
          {cards.map((card) => (
            <Card key={card.name} card={card} />
          ))}
        </ul>
      </section>
    </main>
  );
}
