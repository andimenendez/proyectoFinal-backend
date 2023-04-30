const {Schema,model} = require('mongoose');

const productSchema = Schema ({
    nombre:{
        type:String,
        require:[true,"el nombre es necesario"]
    } ,
    precio:{
        type:Number,
        require:[true,"el precio es necesario"]
    }, 
    descripcion: {
        type:String,
        required: false
    },
    disponible:{
        type:Boolean,
        require:true,
        default:true
    },
    categoria:{
        type:String,
        require:true
    },
    imagenes:{
        type:String,
        require:false
    }
});

module.exports = model('products',productSchema);