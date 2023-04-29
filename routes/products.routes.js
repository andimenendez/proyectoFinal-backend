const { Router } = require('express');
const route = Router();
const { getAllProducts, getById, createProducts, editProducts, deleteProducts } = require('../controllers/products.controllers');

route.get('/get-all-products', getAllProducts );

route.get('/get-by-id/:id', getById);

route.post('/create-products', createProducts);

 route.patch('/edit-products/:id', editProducts);

 route.delete('/delete-products/:id', deleteProducts);

module.exports = route;
