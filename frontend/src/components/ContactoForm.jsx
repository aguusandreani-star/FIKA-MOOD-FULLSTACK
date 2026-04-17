import React, { useState } from 'react';

function ContactoForm() {

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    mail: '',
    telefono: '',
    motivo: '',
    promociones: 'si',
    comentario: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      alert("Formulario enviado correctamente");

      handleReset();

    } catch (error) {

      console.error("Error enviando formulario:", error);
      alert("Error al enviar el mensaje");

    }
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      apellido: '',
      mail: '',
      telefono: '',
      motivo: '',
      promociones: 'si',
      comentario: '',
    });
  };

  return (
    <div className="contenedor" id="contacto">

      <section>
        <h3 id='fikalover'>FIKA LOVERS</h3>
      </section>

      <form onSubmit={handleSubmit} onReset={handleReset}>

        <label htmlFor="nombre"><p>Nombre*</p></label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label htmlFor="apellido"><p>Apellido*</p></label>
        <input
          type="text"
          name="apellido"
          id="apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />

        <label htmlFor="mail"><p>Mail*</p></label>
        <input
          type="email"
          name="mail"
          id="mail"
          value={formData.mail}
          onChange={handleChange}
          required
        />

        <label htmlFor="telefono"><p>Teléfono*</p></label>
        <input
          type="tel"
          name="telefono"
          id="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />

        <label htmlFor="motivo">Motivo de Contacto:</label>
        <select
          id="motivo"
          name="motivo"
          value={formData.motivo}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            -- Selecciona un motivo --
          </option>
          <option value="consulta">Consulta de Productos</option>
          <option value="pedido">Pedido Especial/Cotización</option>
          <option value="otro">Otro</option>
        </select>

        <fieldset>
          <legend>¿Desea recibir promociones?</legend>

          <input
            type="radio"
            id="si-promo"
            name="promociones"
            value="si"
            checked={formData.promociones === 'si'}
            onChange={handleChange}
          />
          <label htmlFor="si-promo">Sí</label>

          <input
            type="radio"
            id="no-promo"
            name="promociones"
            value="no"
            checked={formData.promociones === 'no'}
            onChange={handleChange}
          />
          <label htmlFor="no-promo">No</label>
        </fieldset>

        <label htmlFor="comentario">Comentario:</label>
        <textarea
          id="comentario"
          name="comentario"
          rows="5"
          value={formData.comentario}
          onChange={handleChange}
        />

        <div className="botones">
          <button className="boton1" type="submit">
            Enviar
          </button>

          <button className="boton2" type="reset">
            Borrar
          </button>
        </div>

      </form>

      <p>*Todos los campos con * son obligatorios.</p>

    </div>
  );
}

export default ContactoForm;