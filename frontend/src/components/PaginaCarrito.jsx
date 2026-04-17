import React from 'react';
import { Link } from 'react-router-dom';

function PaginaCarrito({ cart, removeFromCart }) {
  const sumaTotal = cart.reduce((acc, item) => acc + (item.valor * item.cantidad), 0);

  return (
    <section className="carrito-seccion">
      <div className="contenedor-carrito">
        
       
        <Link to="/" className="volver-atras">
          ← Seguir comprando
        </Link>

        <h3>MI PEDIDO</h3>
        
        {cart.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <p>Tu carrito está vacío.</p>
          </div>
        ) : (
          <>
            <div className="lista-carrito">
              {cart.map((item) => (
                <div key={item.id} className="carrito-item">
                  <img src={item.imagen} alt={item.nombre} width="60" />
                  <div className="carrito-info">
                    <h4>{item.nombre}</h4>
                    <p>{item.cantidad} unidades x ${item.valor}</p>
                  </div>
                  <button className="btn-eliminar" onClick={() => removeFromCart(item.id)}>
                    Quitar
                  </button>
                </div>
              ))}
            </div>

            <div className="carrito-total">
              <hr />
              <h4>TOTAL: <span>${sumaTotal}</span></h4>
              
             
              <div className="contenedor-boton-centrado">
                <Link to="/checkout" className="boton-pagar-fika btn-chico no-underline">
                  PAGAR
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default PaginaCarrito;