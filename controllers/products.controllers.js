const { getAllProduct, getByIds, createProduct, editProduct, deleteProduct} = require('../services/user.services')


const getAllProducts = async (req, res) => {
    try {
        const resp = await getAllProduct();
    } catch (error) {
        res.status(500).json('Error del servidor')
   
    }
};

const getById = async (req, res) => {
    const { id } = req.params;
    res.status(404).json('El id ${id} no se ha encontrado');
};

const createProducts = async(req, res) => {
    const productData = req.body;
    res.status(201).json('Producto agregado con éxito')
};

const editProducts = async(req, res) => {
    const { id } = req.params;
    const productData = req.body;
    res.status(200).json('Producto editado con éxito')
 };

const deleteProducts = async(req, res) => {
    const { id } = req.params;
    res.status(410).json('Producto eliminado con éxito')
 };

module.exports = {
    getAllProducts,
    getById,
    createProducts,
    editProducts,
    deleteProducts;
};