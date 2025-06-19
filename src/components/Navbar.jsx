import React from 'react';
import { NavLink } from 'react-router-dom';
import { marcas } from '../data/data';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">📱 Celulares</NavLink>
      </div>
      <ul className="menu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/quienes-somos">Quiénes Somos</NavLink></li>
        <li className="dropdown">
          <span>Productos ▾</span>
          <ul className="dropdown-menu">
            <li><NavLink to="/productos">Ver Todos</NavLink></li>
            {marcas.map(marca => (
              <li key={marca.id}>
                <NavLink to={`/productos/${marca.id}`}>{marca.nombre}</NavLink>
              </li>
            ))}
          </ul>
        </li>
        <li><NavLink to="/contacto">Contacto</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
