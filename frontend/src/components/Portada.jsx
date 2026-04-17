import React from 'react';

function Portada() {
  return (
    <div className="portada" id="portada">
      <h1>
        Dale{' '}
        <a
          className="linkers"
          href="https://www.youtube.com/watch?v=uA1yn2wUW0E&t=21s"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="imagenbase"
            src="/play.svg"
            height="150"
            alt="Play"
          />
          <img
            className="imagenhover"
            src="/hover.svg"
            height="170"
            alt="Play Hover"
          />
        </a>
         a lo <br />natural
      </h1>
      <a href="#nosotros" className="next"></a>
    </div>
  );
}

export default Portada;