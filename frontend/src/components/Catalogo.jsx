import React, { useState } from 'react';


function TarjetaArticulo({ unidad, addToCart }) {
  const [cantidad, setCantidad] = useState(1);

  const sumar = () => setCantidad(prev => prev + 1);
  const restar = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <article className="tarjeta-articulo">
      <div className="contenedor-imagen">
        <img src={unidad.imagen} alt={unidad.nombre} />
      </div>
      
      <div className="info-articulo">
     
        <h4 className="nombre-producto">{unidad.nombre}</h4>
        
        
        <p className="precio-texto">${unidad.valor.toLocaleString('es-AR')}</p>
        
        
        <div className="acciones-compra">
          <div className="selector-cantidad-moderno">
            <button onClick={restar} type="button" className="btn-qty">-</button>
            <span className="qty-numero">{cantidad}</span>
            <button onClick={sumar} type="button" className="btn-qty">+</button>
          </div>

          <button 
            className="boton-agregar" 
            onClick={() => {
              addToCart({ ...unidad, cantidad: cantidad });
              setCantidad(1);
            }}
          >
            AGREGAR
          </button>
        </div>
      </div>
    </article>
  );
}


function Catalogo({ addToCart }) {
  const stockFika = [
    { id: 1, nombre: 'Milanesa de Garbanzos x 200 gr - VIA VEG', valor: 3932, imagen: '/milagarbanzos.jpg' },
    { id: 2, nombre: 'Cremoso x 500gr - FELICES LAS VACAS', valor: 75000, imagen: '/queso.jpg' },
    { id: 3, nombre: 'Hummus de Garbanzos x 220gr - FELICES LAS VACAS', valor: 2500, imagen: '/humus.jpg' },
    { id: 4, nombre: 'Pasta Multicereal Fusilli con Quinoa x 300gr - WAKAS', valor: 4500, imagen: '/pastaquinoa.jpg' },
    { id: 5, nombre: 'Falafel x 250 gr - OTRO VIAJE', valor: 8000, imagen: '/falafel.jpg' },
    { id: 6, nombre: 'Dulce de Frutos del Bosque ORGÁNICO x 350gr - MASSEUBE', valor: 9000, imagen: '/mermelada.jpg' },
    { id: 7, nombre: 'Risotto de Hongos x 200 gr - MOLE', valor: 9000, imagen: '/risotto.jpg' },
    { id: 8, nombre: 'Tahine x 200gr - RECETAS DE ENTONCES', valor: 12000, imagen: '/Tahine.jpg' },
    { id: 8, nombre: 'Bebida de Almendras Original Sin Azúcar x 946 ml - SILK', valor: 4000, imagen: '/leche.jpg' },
  ];

  return (
    <section className="seccion-catalogo" id="catalogo">
      <h3 className="titulo-seccion">TIENDA</h3>
      <div className="galeria-grid">
        {stockFika.map((unidad) => (
          <TarjetaArticulo 
            key={unidad.id} 
            unidad={unidad} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    </section>
  );
}

export default Catalogo;