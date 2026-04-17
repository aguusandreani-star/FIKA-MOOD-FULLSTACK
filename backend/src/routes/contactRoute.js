import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {

  const { nombre, apellido, mail, telefono, motivo, promociones, comentario } = req.body;

  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
     user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
        from: "aguusandreani@gmail.com",
  to: "aguusandreani@gmail.com",
  replyTo: mail,
  subject: `Nuevo contacto desde Fika Mood`,

  html: `
  <div style="font-family: Arial; max-width:600px; margin:auto; border:1px solid #eee; border-radius:10px; overflow:hidden">

    <div style="background:#6b8f71; color:white; padding:20px; text-align:center">
      <h2>Nuevo mensaje</h2>
         <img 
        src= "https://i.imgur.com/Py6eIu6.png"
        alt="Fika Mood"
        style="width:140px; margin-bottom:10px;"
      />

    </div>

    <div style="padding:20px">

      <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>

      <p><strong>Email del cliente:</strong> ${mail}</p>

      <p><strong>Teléfono:</strong> ${telefono}</p>

      <p><strong>Motivo:</strong> ${motivo}</p>

      <p><strong>Desea promociones:</strong> ${promociones}</p>

      <hr/>

      <p><strong>Mensaje:</strong></p>

      <p style="background:#f9f9f9; padding:15px; border-radius:8px">
        ${comentario}
      </p>

    </div>

    <div style="background:#f1f1f1; padding:10px; text-align:center; font-size:12px">
      Formulario enviado desde la web Fika Mood
    </div>

  </div>
  `
};
      

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Mail enviado correctamente" });

  } catch (error) {

    console.log(error);   // MUY IMPORTANTE PARA VER EL ERROR REAL
    res.status(500).json({ message: "Error enviando mail" });

  }

});

export default router;