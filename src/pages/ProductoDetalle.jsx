import { useParams } from "react-router-dom";
import { celulares } from "../data/data";

function ProductoDetalle() {
  const { idCelular } = useParams();
  const celular = celulares.find(c => c.id === parseInt(idCelular));

  if (!celular) return <p>Producto no encontrado</p>;

  return (
    <div>
      <h1>{celular.nombre}</h1>
      <p>{celular.descripcion}</p>
      <p>Precio: ${celular.precio}</p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {celular.fotos.map((foto, index) => (
          <img key={index} src={foto} alt={`${celular.nombre} ${index}`} width="300" />
        ))}
      </div>
    </div>
  )
}

export default ProductoDetalle;
