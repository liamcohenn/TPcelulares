import React from 'react';
import { useParams } from 'react-router-dom';
import { celulares } from '../data/data';
import './ProductoDetalle.css';

const ProductoDetalle = () => {
  const { idCelular } = useParams();
  const celular = celulares.find(c => c.id === parseInt(idCelular));

  if (!celular) {
    return <h2 className="no-encontrado">Producto no encontrado</h2>;
  }

  return (
    <div className="detalle-container">
      <h1>{celular.nombre}</h1>
      <p className="descripcion">{celular.descripcion}</p>
      <h3 className="precio">Precio: ${celular.precio}</h3>

      <div className="galeria-principal">
        {celular.fotos.map((foto, i) => (
          <div className="imagen-box" key={i}>
            <img src={foto} alt={celular.nombre} />
          </div>
        ))}
      </div>

      <div className="botones">
        <button className="btn-comprar">Comprar producto</button>
        <button className="btn-carrito">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ProductoDetalle;
