import Category from "../models/categoryModel.js";

/* GET ALL */
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener categorías", error: error.message });
  }
};

/* GET BY ID */
export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "No encontrada" });
    }

    res.json(category);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener categoría", error: error.message });
  }
};

/* CREATE */
export const postCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    const saved = await category.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: "Error al crear categoría", error: error.message });
  }
};

/* UPDATE */
export const putCategory = async (req, res) => {
  try {
    const updated = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        returnDocument: "after",
        runValidators: true
      }
    );

    if (!updated) {
      return res.status(404).json({ message: "No encontrada" });
    }

    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar categoría", error: error.message });
  }
};

/* DELETE */
export const deleteCategory = async (req, res) => {
  try {
    const deleted = await Category.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "No encontrada" });
    }

    res.json({ message: "Categoría eliminada" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar categoría", error: error.message });
  }
};