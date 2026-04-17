import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header({ cartCount }) {
  const location = useLocation();

  
  const ocultarEnRutas = ['/carrito', '/checkout'];
  if (ocultarEnRutas.includes(location.pathname)) {
    return null;
  }

  return (
    <header className="header-fika">
      <nav id="top">
        <ul>
          <li>
            <Link to="/">
              <img src="/logo.svg" width="100" alt="Logo FIKA MOOD" />
            </Link>
          </li>
          <li><Link to="/">INICIO</Link></li>
          <li><a href="#nosotros">SOBRE NOSOTROS</a></li>
          <li><a href="#certificaciones">CERTIFICACIONES</a></li>
          <li><a href="#recetas">RECETAS</a></li>
          <li><a href="#productos">PRODUCTOS</a></li>
          
          <li>
            <a href="#catalogo" className="btn-nav-catalogo">TIENDA</a>
          </li>
          
          <li><a href="#contacto">CONTACTANOS</a></li>

        
          <li className="seccion-nav-carrito">
            <Link to="/carrito" className="enlace-carrito">
              <span className="icono-carrito-emoji">🛒</span>
              {cartCount > 0 && (
                <span className="notificacion-carrito">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;