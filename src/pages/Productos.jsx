import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { celulares, marcas } from '../data/data';
import CardCelular from '../components/CardCelular';
import './Productos.css';

const Productos = () => {
  const { idMarca } = useParams();

  const [listaFiltrada, setListaFiltrada] = useState(celulares);
  const [marcaNombre, setMarcaNombre] = useState(null);

  useEffect(() => {
    if (idMarca) {
      
      const productosFiltrados = celulares.filter(
        (cel) => cel.marcaId === parseInt(idMarca)
      );
      setListaFiltrada(productosFiltrados);

      const marca = marcas.find((m) => m.id === parseInt(idMarca));
      setMarcaNombre(marca ? marca.nombre : null);
    } else {
      
      setListaFiltrada(celulares);
      setMarcaNombre(null);
    }
  }, [idMarca]); 

  return (
    <main className="productos-main">
      <div className="productos-container">
        <h1>{marcaNombre ? `Productos de ${marcaNombre}` : 'Todos los Productos'}</h1>
        <div className="productos-grid">
          {listaFiltrada.map((celular) => (
            <CardCelular key={celular.id} celular={celular} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Productos;

