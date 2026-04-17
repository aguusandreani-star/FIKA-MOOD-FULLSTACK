import Product from "../models/productModel.js";

export const getAllProducts = () => Product.find().populate("category");

export const getProductById = (id) => Product.findById(id).populate("category");

export const createProduct = (data) => Product.create(data);

export const updateProduct = (id, data) =>
  Product.findByIdAndUpdate(id, data, { new: true });

export const deleteProduct = (id) => Product.findByIdAndDelete(id);