const mongoose = require('mongoose');
const ProductoSchema = new mongoose.Schema({
    titulo: { type: String, required: [true, "Titulo es requerido"] },
    precio: {type: Number, required: [true, "Precio es requerido"]},
    descripcion: { type: String, required: [true, "Descripcion es requerida"] }
}, { timestamps: true });
module.exports.Producto = mongoose.model('Producto', ProductoSchema);

