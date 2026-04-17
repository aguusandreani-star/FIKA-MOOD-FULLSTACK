# Fika Mood API

## 1. Introducción

El presente proyecto consiste en el desarrollo de una aplicación web full stack para la gestión de una cafetería saludable denominada **Fika Mood**.

El sistema permite administrar productos y categorías, gestionar usuarios con autenticación segura, enviar mensajes a través de un formulario de contacto y ofrecer interacción mediante un chatbot.

La arquitectura implementada sigue el modelo **cliente-servidor**, separando el frontend del backend y utilizando una base de datos NoSQL.

---

## 2. Tecnologías utilizadas

### Frontend
- React
- Vite
- JavaScript
- CSS

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- bcrypt
- JSON Web Token (JWT)
- Nodemailer
- dotenv
- cors

### Herramientas de desarrollo
- Thunder Client (testing de API)
- Git y GitHub
- Vercel (deploy frontend)

---

## 3. Esquema de la Base de Datos

La base de datos se encuentra estructurada en las siguientes colecciones:

### 3.1 Productos (`products`)

```json
{
  "_id": "ObjectId",
  "name": "String",
  "description": "String",
  "price": "Number",
  "stock": "Number",
  "image": "String",
  "available": "Boolean",
  "category": "ObjectId",
  "createdAt": "Date",
  "updatedAt": "Date"
}

```json

###
