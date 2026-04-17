import express from "express";
import * as service from "../services/userService.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

// Controlador para crear usuario
export const postUser = async (req, res) => {
  try {
    const user = await service.createUser(req.body);

    res.status(201).json({
      message: "Usuario creado correctamente",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controlador para login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await service.getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
        email: user.email
      },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.status(200).json({
      message: "Login correcto",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// --- DEFINICIÓN DE RUTAS ---
router.post("/register", postUser);
router.post("/login", loginUser);

// Esto es lo que soluciona tu error de "SyntaxError: does not provide an export named 'default'"
export default router;