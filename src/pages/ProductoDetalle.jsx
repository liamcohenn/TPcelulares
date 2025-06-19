import React from 'react';
import { useParams } from 'react-router-dom';
import { celulares } from '../data/data';

const ProductoDetalle = () => {
  const { idCelular } = useParams();
  const celular = celulares.find(c => c.id === parseInt(idCelular));

  if (!celular) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className="page detalle">
      <h1>{celular.nombre}</h1>
      <p>{celular.descripcion}</p>
      <h3>Precio: ${celular.precio}</h3>
      <div className="imagenes-detalle">
        {celular.fotos.map((foto, i) => (
          <img key={i} src={foto} alt={celular.nombre} />
        ))}
      </div>
    </div>
  );
};

export default ProductoDetalle;
