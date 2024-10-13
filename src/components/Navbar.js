import React from 'react';
import './Navbar.css';
import logo from '../assets/uniendoVm.png'; // Importa el logo desde la carpeta de assets

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="logo-container">
        <img src={logo} alt="Logo Uniendo Villa María" className="logo" />
      </div>
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>Uniendo Villa María</h1>
        </div>
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
