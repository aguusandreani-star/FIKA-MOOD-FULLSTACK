import Category from "../models/categoryModel.js";

export const getAllCategories = () => Category.find();

export const getCategoryById = (id) => Category.findById(id);

export const createCategory = (data) => Category.create(data);

export const updateCategory = (id, data) =>
  Category.findByIdAndUpdate(id, data, { new: true });

export const deleteCategory = (id) => Category.findByIdAndDelete(id);