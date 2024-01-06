import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-body-tertiary">
      <div className="container text-center">
        <span className="text-body-secondary">
          <Link to="https://www.instagram.com/techtarang.2k24/" className='custom-link text-primary-emphasis' target="_blank" rel="noopener noreferrer">
            Follow us on Instagram @techtarang.2k24
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
