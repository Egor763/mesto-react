import './Popup.css';
import { FormProfile } from './FormProfile/FormProfile';
// import { FormAddCard } from './FormAddCard/FormAddCard';

import closeButton from '../../images/Close Icon.svg';

export function Popup(props) {
  const { closePopup, title, children } = props;
  return (
    <section className='Popup'>
      <div className='overlay'></div>
      <div className='popup__container'>
        <button
          onClick={closePopup}
          className='popup__close-button hover__link'
          type='button'
        >
          <img className='popup__close-icon' src={closeButton} alt='Закрыть' />
        </button>
        <h2 className='popup__title'>{title}</h2>

        {children}
        {/* <FormAddCard /> */}
      </div>
    </section>
  );
}
