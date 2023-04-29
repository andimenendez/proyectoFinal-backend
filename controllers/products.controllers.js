const { getAllProductService, getProductByIdService, createProductService, editProductService, deleteProductService,disableProductService} = require('../services/products.service')


const getAllProducts = async (req, res) => {
    try {
        const resp = await getAllProductService();
        if(resp.lenght === 0)return res.status(404).json('No hay productos en la base de datos');
        res.status(200).json(resp);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const getProductById = async (req, res) => {
    try {
        const {id} = req.params;
        const resp = await getProductByIdService(id);
        if (!resp) return res.status(404).json(`El producto con el id: ${id} no se ha encontrado`)
        res.status(200).json(resp);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const createProducts = async(req, res) => {
    try {
        const productData = req.body;
        const resp = await createProductService(productData);
        res.status(201).json('Producto agregado con éxito');
    } catch (error) {
        res.status(500).json(error.message);
    }

};

const editProducts = async(req, res) => {
    try {
        const { id } = req.params;
        const productData = req.body;
        const resp = await editProductService(id,productData);

    } catch (error) {
        
    }
    
    res.status(200).json('Producto editado con éxito')
 };

const deleteProducts = async(req, res) => {
    try {
        const { id } = req.params;
        res.status(410).json('Producto eliminado con éxito')
    } catch (error) {
        
    }

 };

 const disableProduct = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
 }
module.exports = {
    getAllProducts,
    getProductById,
    createProducts,
    editProducts,
    deleteProducts,
    disableProduct
};