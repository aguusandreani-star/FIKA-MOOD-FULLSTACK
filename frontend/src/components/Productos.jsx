import React from 'react';


const galeriaData = [
  // Fila 1
  ['/sintac1.avif', 'sintac1'],
  ['/sintac2.avif', 'sintac2'],
  ['/organi4.avif', 'organi4'],
  // Fila 2
  ['/natural1.avif', 'natural1'],
  ['/natural2.avif', 'natural2'],
  ['/natural3.avif', 'natural3'],
  // Fila 3
  ['/organico1.avif', 'organico1'],
  ['/organico2.avif', 'organico2'],
  ['/organico3.avif', 'organico3'],
];

function Productos() {
 
  const rows = [
    galeriaData.slice(0, 3),
    galeriaData.slice(3, 6),
    galeriaData.slice(6, 9),
  ];

  return (
    <section>
      <div className="productos" id="productos">
        <h3>Nuestros productos</h3>
        <div className="galeria">
          {rows.map((row, rowIndex) => (
            <article key={rowIndex}>
              {row.map(([src, title]) => (
                <a href={src} title={title} target="new" key={title}>
                  <img src={src} alt={title} width="300px" height="300px" />
                </a>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Productos;