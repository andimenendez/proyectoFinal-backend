const express = require("express");
const app = express();
const port = process.env.PORT;
const morgan = require('morgan');
const cors = require('cors');
const productsRoutes = require('../routes/products.routes');
require("dotenv/config");
const userRoutes = require("../routes/user.routes");
require("../dataBase/dbConnection");
const loginAuth = require("../routes/login.routes");

//Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors()); 

//Rutas
app.use('/products', productsRoutes);
app.use("/user", userRoutes);
app.use("/login", loginAuth);


app.listen(port,()=>{
    console.log(`estamos escuchando el puerto ${port}`);
});

