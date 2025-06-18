import { NavLink } from "react-router-dom";
import { marcas } from "../data/data";

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: '#333', color: 'white' }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/quienes-somos">Quiénes Somos</NavLink>
      <div style={{ position: 'relative' }}>
        <span>Productos ▼</span>
        <div style={{ position: 'absolute', backgroundColor: 'white', color: 'black', padding: '0.5rem', display: 'none' }} className="dropdown">
          <NavLink to="/productos">Ver todos</NavLink>
          {marcas.map(m => (
            <NavLink key={m.id} to={`/productos/marca/${m.id}`}>{m.nombre}</NavLink>
          ))}
        </div>
      </div>
      <NavLink to="/contacto">Contacto</NavLink>
    </nav>
  )
}

export default Navbar;
