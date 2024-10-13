import React from 'react';
import './Navbar.css';
import logo from '../assets/uniendoVm.png'; // Importa el logo
import whatsappIcon from '../assets/whatsapp.png'; // Importa el ícono de WhatsApp

const Navbar = () => {
  const whatsappNumber = '5491123456789'; // Cambia este número al de tu empresa

  return (
    <header className="navbar-container">
      <div className="logo-container">
        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp Icon" className="whatsapp-icon" />
        </a>
        <img src={logo} alt="Logo Uniendo Villa María" className="logo" />
      </div>
      <nav className="navbar">
        <ul className="navbar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre Nosotros</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
