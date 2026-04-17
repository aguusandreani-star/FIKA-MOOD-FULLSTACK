import React from 'react';


const certificacionesData = [
  { img: '/Vegano.svg', alt: 'Vegano', text: 'NATURAL' },
  { img: '/Recurso 1.svg', alt: 'Libre de Parabenos', text: 'CELIACOS' },
  { img: '/Organico.svg', alt: 'Orgánico', text: 'ORGANICO' },
  { img: '/Recurso 2.svg', alt: 'Cruelty Free', text: 'DIABETICOS' },
];

function Certificaciones() {
  return (
    <section className="certificaciones" id="certificaciones">
      <div>
        <h2>Sé parte del cambio</h2>
        <p>TODOS NUESTROS PRODUCTOS ESTÁN CERTIFICADOS</p>

        <div className="separador">
          <img src="/Separador-blanco.svg" alt="Separador" width="411" height="18" />
        </div>

        <div className="iconos">
          {certificacionesData.map((cert) => (
            <article key={cert.text}>
              <img src={cert.img} alt={cert.alt} height="85" width="85" />
              <p>{cert.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificaciones;