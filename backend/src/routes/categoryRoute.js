import express from "express";
import * as controller from "../controllers/categoryController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", controller.getCategories);
router.get("/:id", controller.getCategoryById);
router.post("/", verifyToken, controller.postCategory);
router.put("/:id", verifyToken, controller.putCategory);
router.delete("/:id", verifyToken, controller.deleteCategory);

export default router;