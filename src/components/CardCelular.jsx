import React from 'react';
import { Link } from 'react-router-dom';
import './CardCelular.css';

const CardCelular = ({ celular }) => {
  return (
    <div className="card-celular">
      <div className="img-wrapper">
        <img src={celular.fotos[0]} alt={celular.nombre} />
      </div>
      <h3>{celular.nombre}</h3>
      <p>Precio: ${celular.precio}</p>
      <Link to={`/productos/detalle/${celular.id}`} className="ver-detalle">Ver detalle</Link>
    </div>
  );
};

export default CardCelular;
