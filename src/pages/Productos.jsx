import { useParams } from "react-router-dom";
import { celulares } from "../data/data";
import CardCelular from "../components/CardCelular";

function Productos() {
  const { idMarca } = useParams();
  const celularesFiltrados = idMarca ? celulares.filter(c => c.marcaId === parseInt(idMarca)) : celulares;

  return (
    <div>
      <h1>Productos</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {celularesFiltrados.map(celular => (
          <CardCelular key={celular.id} celular={celular} />
        ))}
      </div>
    </div>
  )
}

export default Productos;
