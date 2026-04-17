# Fika Mood API

## 1. Introducción

El presente proyecto consiste en el desarrollo de una aplicación web full stack para la gestión de una cafetería saludable denominada **Fika Mood**.

El sistema permite administrar productos y categorías, gestionar usuarios con autenticación segura, enviar mensajes a través de un formulario de contacto y ofrecer interacción mediante un chatbot, asi tambien cuenta con un ecommerce, el cual le envia un mail al usuario con su orden de compra.

La arquitectura implementada sigue el modelo cliente-servidor, separando el frontend del backend y utilizando una base de datos NoSQL.

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
- Thunder Client
- Git y GitHub
---

## 3. Esquema de la Base de Datos

### Productos (products)
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

### Categorías (categories)

{
  "_id": "ObjectId",
  "name": "String",
  "description": "String",
  "createdAt": "Date",
  "updatedAt": "Date"
}

### Usuarios (users)

{
  "_id": "ObjectId",
  "name": "String",
  "email": "String",
  "password": "String (hasheada)",
  "role": "String",
  "createdAt": "Date",
  "updatedAt": "Date"
}

---

## 4. Instalación y ejecución

### Backend

cd backend
npm install
npm run dev

Servidor en:
http://localhost:5000

### Frontend

cd frontend
npm install
npm run dev

Frontend en:
http://localhost:5173

---

## 5. Variables de entorno

MONGO_URI=mongodb://127.0.0.1:27017/fika-mood
JWT_SECRET=fika_mood_secret_key_2026_proyect_safe
EMAIL_USER=aguusandreani@gmail.com
EMAIL_PASS=123456
PORT=5000

---

## 6. Endpoints disponibles

### Usuarios
POST /api/users/register
POST /api/users/login

### Productos
GET /api/products
GET /api/products/:id
POST /api/products (requiere token)
PUT /api/products/:id (requiere token)
DELETE /api/products/:id (requiere token)

### Categorías
GET /api/categories
POST /api/categories (requiere token)
PUT /api/categories/:id (requiere token)
DELETE /api/categories/:id (requiere token)

### Contacto
 El usuarui puede enviar mensajes a través de un formulario de contacto y ofrecer interacción mediante un chatbot

 Ej: En el botchat se pude ver menu, hora de atencion, responde a emociones recomendando recetas

---

## 7. Ejemplos de datos

Registro:
{
  "name": "Admin Fika",
  "email": "aguusandreani@gmail.com",
  "password": "123456",
  "role": "admin"
}

Login:
{
  "email": "aguusandreani@gmail.com",
  "password": "123456"
}

Producto:
{
  "name": "Torta de chocolate",
  "description": "Torta artesanal",
  "price": 3500,
  "stock": 10,
  "image": "/images/torta.jpg",
  "available": true,
  "category": "ID_DE_CATEGORIA"
}

---

## 8. Autenticación

Header:
Authorization: Bearer TOKEN

---

## 9. Estructura

backend/
├── app.js
├── src/
│   ├── models/
│   ├── services/
│   ├── controllers/
│   ├── routes/
│   ├── config/
│   └── middleware/

---

## 10. Autor

Agustina Andreani
