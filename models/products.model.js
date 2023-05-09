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
    disable: {
        type:Boolean,
        required: false
    },
    descripcion:{
        type:String,
        required:false,
    },
    categoria:{
        type:String,
        require:true
    },
    imagenes:{
        type:String,
        require:false
    },
    destacado:{
        type:Boolean,
        require:false
    }
});

module.exports = model('products',productSchema);