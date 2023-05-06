const { Router } = require('express');
const route = Router();
const { getAllProducts, getProductById, createProducts, editProducts, deleteProducts,disableProduct,destacarProducto } = require('../controllers/products.controllers');

route.get('/get-all-products', getAllProducts );

route.get('/get-by-id/:id', getProductById);

route.post('/create-products', createProducts);

 route.patch('/edit-products/:id', editProducts);
 
 route.patch ('/disable-products/:id',disableProduct);
 
 route.delete('/delete-products/:id', deleteProducts);
 
 route.patch ('/destacado-producto/:id',destacarProducto);
 
module.exports = route;
