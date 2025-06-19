import React from 'react';
import { useParams } from 'react-router-dom';
import { celulares, marcas } from '../data/data';
import CardCelular from '../components/CardCelular';

const Productos = () => {
  const { idMarca } = useParams();

  let listaFiltrada = celulares;
  if (idMarca) {
    listaFiltrada = celulares.filter(cel => cel.marcaId === parseInt(idMarca));
  }

  const marcaNombre = idMarca ? marcas.find(m => m.id === parseInt(idMarca))?.nombre : null;

  return (
    <div className="page productos">
      <h1>{marcaNombre ? `Productos de ${marcaNombre}` : 'Todos los Productos'}</h1>
      <div className="productos-grid">
        {listaFiltrada.map(celular => (
          <CardCelular key={celular.id} celular={celular} />
        ))}
      </div>
    </div>
  );
};

export default Productos;
