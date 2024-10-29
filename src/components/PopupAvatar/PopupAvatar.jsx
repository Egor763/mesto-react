import './PopupAvatar.css';

import closeIcon from '../../images/Close Icon.svg';

export function PopupAvatar(props) {
  const { closePopupAvatar, title, children } = props;
  return (
    <section className='PopupAvatar'>
      <div className='avatar__overlay'></div>
      <div className='popup-avatar__container'>
        <button
          onClick={closePopupAvatar}
          className='popup-avatar__button hover__link'
          type='button'
        >
          <img className='popup-avatar__icon' src={closeIcon} alt='Закрыть' />
        </button>
        <h2 className='popup-avatar__title'>{title}</h2>
        {children}
      </div>
    </section>
  );
}
