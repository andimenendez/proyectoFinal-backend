const {
  getAllProductService,
  getProductByIdService,
  createProductService,
  editProductService,
  deleteProductService,
  obtenerProductoPorNombre,
} = require("../services/products.service");

const getAllProducts = async (req, res) => {
  try {
    const resp = await getAllProductService();
    if (resp.lenght === 0)
      return res.status(404).json("No hay productos en la base de datos");
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await getProductByIdService(id);
    if (!resp)
      return res
        .status(404)
        .json(`El producto con el id: ${id} no se ha encontrado`);
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const createProducts = async (req, res) => {
  try {
    const productData = req.body;
    const resp = await createProductService(productData);
    res.status(201).json({
      status: "ok",
      message: "Producto agregado con éxito",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const editProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const productData = req.body;
    const resp = await editProductService(id, productData);
    if (!resp) return res.status(404).json("producto no encontrado");
    res.status(201).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await deleteProductService(id);
    if (!resp) return res.status(404).json("Producto no encontrado");
    res.status(200).json("producto eliminado exitosamente");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const disableProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const disable = true;
    const resp = await editProductService(id, { disable });
    if (!resp) return res.status(404).json("Producto deshabilitado");
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const destacarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { destacado } = req.body;
    const resp = await editProductService(id, { destacado });
    if (!resp) return res.status(404).json("no se pudo destacar el articulo");
    res.status(200).json(resp);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al destacar el producto");
  }
};

const getproductByName = async (req, res) => {
  try {
    const { nombre } = req.params;
    const resp = await obtenerProductoPorNombre(nombre);
    if (!resp) {
      res.status(404).json("no se encontro el productos");
      return;
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProducts,
  editProducts,
  deleteProducts,
  disableProduct,
  destacarProducto,
  getproductByName,
};
