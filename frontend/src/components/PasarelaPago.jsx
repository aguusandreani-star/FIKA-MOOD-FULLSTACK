import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PasarelaPago() {
  const [pagoRealizado, setPagoRealizado] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setPagoRealizado(true);
  };

  
  if (pagoRealizado) {
    return (
      <div className="pago-exitoso">
        <div className="check-animacion">✔️</div>
        <h2>¡Pedido Confirmado!</h2>
        <p>Gracias por elegir <strong>Fika Mood</strong>. Tu pedido está en proceso.</p>
        <button 
          className="boton-pagar-fika" 
          onClick={() => navigate('/')} 
          style={{ display: 'inline-block', width: 'auto', marginTop: '20px' }}
        >
          VOLVER AL INICIO
        </button>
      </div>
    );
  }

  return (
    <section className="checkout-seccion">
      <div className="contenedor-checkout">
        
        
        <span 
          onClick={() => navigate(-1)} 
          className="volver-atras" 
          style={{ cursor: 'pointer' }}
        >
          ← Volver atrás
        </span>

        <h3>FINALIZAR COMPRA</h3>
        
        <form onSubmit={handleSubmit} className="formulario-pago">
          
          <div className="grupo-formulario">
            <h4>1. Datos de Envío</h4>
            <input type="text" placeholder="Nombre completo" required />
            <input type="email" placeholder="Email de contacto" required />
            <input type="text" placeholder="Dirección de entrega" required />
          </div>

          <div className="grupo-formulario">
            <h4>2. Detalles de Pago</h4>
            <div className="tarjeta-box">
              <input 
                type="text" 
                placeholder="Número de tarjeta (16 dígitos)" 
                pattern="\d{16}" 
                maxLength="16" 
                required 
              />
              <div className="fila-input">
                <input 
                  type="text" 
                  placeholder="MM/AA" 
                  pattern="\d{2}/\d{2}" 
                  maxLength="5" 
                  required 
                />
                <input 
                  type="text" 
                  placeholder="CVC" 
                  pattern="\d{3}" 
                  maxLength="3" 
                  required 
                />
              </div>
            </div>
          </div>

          <button type="submit" className="boton-pagar-fika btn-final">
            CONFIRMAR Y PAGAR
          </button>
          
          <p className="pago-seguro-nota">
            🔒 Pago procesado de forma segura
          </p>
        </form>
      </div>
    </section>
  );
}

export default PasarelaPago;