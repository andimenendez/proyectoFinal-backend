const { Router } = require("express");
const route = Router();
const { body } = require("express-validator");

route.get('/get-all-products', (req, res)=>{
    res.status(200).json('Este es el listado de productos')
} );

route.get('/get-by-id/:id'(req, res) =>{
    res.status(404).json('El id ${id} no se ha encontrado');
});

route.post('/crear-producto', (req, res) => {
    res.status(201).json('Producto agregado con éxito')
 });

 route.patch('/edit-products/:id' (req, res) => {
    const { id } = req.params;
    const productData = req.body;
    res.status(200).json('Producto editado con éxito')
    
 })

 route.delete('/delete-product/:id', (req, res) => {
    const { id } = req.params;
    res.status(410).json('Producto eliminado con éxito')
 });


module.exports = route;
