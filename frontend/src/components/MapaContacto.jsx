function MapaContacto() {
  return (
    <section>
      <div id="contacto">
        <h3>Encontranos en:</h3>
        <div>
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.209878937135!2d-58.42269182510332!3d-34.598853972956015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca7cd54f107b%3A0x88bd8fe0e0b6e3a6!2sCentro%20de%20e-Learning%20UTN%20BA!5e0!3m2!1ses!2sar!4v1758683078269!5m2!1ses!2sar"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de ubicación"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default MapaContacto;