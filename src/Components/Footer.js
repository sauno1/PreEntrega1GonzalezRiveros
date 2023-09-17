import React from 'react';
import './styles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h3>Contacto:</h3>
        <p>11 3178 1071</p>
        <p>Santi.gonzalez98@hotmail.com.ar</p>
      </div>
      <div className="footer-address">
        <h3>Domicilio:</h3>
        <p>Bahía Blanca 1500, Buenos Aires, Argentina</p>
      </div>
      <div className="footer-social">
        <a
          href="https://www.instagram.com/tu_cuenta_de_instagram/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/logoinsta.png" alt="Instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

