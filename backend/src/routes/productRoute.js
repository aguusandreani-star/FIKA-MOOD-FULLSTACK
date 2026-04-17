import express from "express";
import * as controller from "../controllers/productController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", controller.getAllProducts);
router.get("/:id", controller.getProductById);
router.post("/", verifyToken, controller.createProduct);
router.put("/:id", verifyToken, controller.updateProduct);
router.delete("/:id", verifyToken, controller.deleteProduct);

export default router; 