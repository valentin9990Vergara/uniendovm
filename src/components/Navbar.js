import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'; // Importa el logo
import whatsappIcon from '../assets/whatsapp.png'; // Importa el ícono de WhatsApp
import instagramIcon from '../assets/instagram.png'; // Importa el ícono de Instagram
import affiliateIcon from '../assets/affiliate.png'; // Importa el ícono de "Afiliarse"

const Navbar = () => {
  const whatsappNumber = '543534296125'; // Cambia este número al de tu empresa
  const instagramProfile = 'https://www.instagram.com/uniendovillamaria/';

  return (
    <header className="navbar-container">
      <div className="logo-container">
        {/* Contenedor de los íconos de redes sociales */}
        <div className="icon-container">
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp Icon" className="whatsapp-icon" />
          </a>
          <a href={instagramProfile} target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram Icon" className="instagram-icon" />
          </a>
        </div>
        {/* Logo centrado */}
        <img src={logo} alt="Logo Uniendo Villa María" className="logo" />
        {/* Contenedor para el ícono de Afiliarse */}
        <div className="affiliate-container">
          <div className="affiliate-box">
            <a href="/affiliate" className="affiliate-link">
              <img src={affiliateIcon} alt="Afiliarse" className="affiliate-icon" />
              <span className="affiliate-text">Afiliarse</span>
            </a>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <ul className="navbar-menu">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Sobre Nosotros</a></li>
          <li><a href="#services">Propuestas</a></li>
          <li><a href="#services">Transparencia</a></li>
          <li><a href="#services">Noticias</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
