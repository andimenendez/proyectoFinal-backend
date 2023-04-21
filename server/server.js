const express = require ('express');
const app = express();
require('dotenv/config');
const port = process.env.PORT;
const morgan = require('morgan');
const cors = require('cors');

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


app.listen(port,()=>{
    console.log(`estamos escuchando el puerto ${port}`);
})