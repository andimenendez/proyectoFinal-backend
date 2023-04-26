const express = require ('express');
const app = express();
require('dotenv/config');
const port = process.env.PORT;
const morgan = require('morgan');
const cors = require('cors');
const products.routes = require('../routes/products.routes')

//Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors()); 

//Rutas
app.use('/products', products.routes)

app.listen(port,()=>{
    console.log(`estamos escuchando el puerto ${port}`);
});