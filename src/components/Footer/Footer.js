import './Footer.css';

export function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className='footer page__footer'>
      <p className='footer__copyright'>&copy; {date} Mesto Russia</p>
    </footer>
  );
}
