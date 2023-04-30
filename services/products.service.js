const Product = require('../models/products.model');

const getAllProductService = async ()=> {
    return await Product.find();
};

const getProductByIdService = async (id)=> { 
    return Product.findById(id);
};
 
const createProductService = async (products)=> {
    const newProduct = new Product(products);
    return await newProduct.save();
};

const editProductService = async ()=> {

};

const deleteProductService = async ()=> {

};
const disableProductService = async(req,res) =>{

};

module.exports = {
    getAllProductService,
    getProductByIdService,
    createProductService,
    editProductService,
    deleteProductService,
    disableProductService
}

//Los products.service se diferencian de los product controllers por no tener la "s" en productS.