const Product = require("../models/products.model");

const getAllProductService = async () => {
  return await Product.find();
};

const getProductByIdService = async (id) => {
  return Product.findById(id);
};

const createProductService = async (products) => {
  const newProduct = new Product(products);
  return await newProduct.save();
};

const editProductService = async (id, productData) => {
  return Product.findByIdAndUpdate(id, productData);
};

const deleteProductService = async (id) => {
  return Product.findByIdAndDelete(id);
};

const obtenerProductoPorNombre = async (nombre) => {
  const regex = new RegExp(`^${nombre}`, "i");
  const productos = await Product.find({ nombre: { $regex: regex } });
  return productos;
};

module.exports = {
  getAllProductService,
  getProductByIdService,
  createProductService,
  editProductService,
  deleteProductService,
  obtenerProductoPorNombre,
};
