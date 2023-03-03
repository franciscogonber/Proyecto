const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const ProductsSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: [true, "Por favor ingresa el producto"]
    },
    descripcion: {
      type: String,
      // required: [true, "Por favor ingresa la descripcion"]
    },
    precio: {
      type: Number,
      // required: [true, "Por favor el precio"],
      
    },
    foto: {
      type: String,
    }
  }, {timestamps: true});
  


  
module.exports = mongoose.model('Productos', ProductsSchema)