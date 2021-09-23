import  Mongoose from "mongoose";

const carritoSchema = new Mongoose.Schema({
    id: {type:String, required:true},
    timestamp: {type:timestamp, required:true},
    productos:{
        nombre: {type: String, required: true},
        precio: {type: Number, required:true},
        descripcion:{type: String, required:true, unique: true},
        codigo: {type: Number, required:true},
        foto: {type: String, required:true},
        stock: {type: Number, required:true}
    }

})

export const carrito = new Mongoose.model('carrito',carritoSchema);