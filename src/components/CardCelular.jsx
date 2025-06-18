import { Link } from "react-router-dom";

function CardCelular({ celular }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', width: '250px' }}>
      <img src={celular.fotos[0]} alt={celular.nombre} style={{ width: '100%' }} />
      <h3>{celular.nombre}</h3>
      <p>${celular.precio}</p>
      <Link to={`/productos/detalle/${celular.id}`}>Ver Detalle</Link>
    </div>
  )
}

export default CardCelular;
