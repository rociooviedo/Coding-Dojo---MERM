const { response } = require('express');
const { Producto } = require('../models/producto.model');

/*module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}*/

module.exports.createProducto = (request, response) => {
    const { titulo, precio, descripcion } = request.body;
    Producto.create({
        titulo,
        precio,
        descripcion
    })
        .then(producto => response.json(producto))
        .catch(err => response.json(err));
}

//Get All
module.exports.getAllProducts = (request, response) => {
    Producto.find({})
        .then(producto => response.json(producto))
        .catch((err) => response.json(err));
}

//Get one product
module.exports.getProduct = (request, response) => {
    Producto.findOne({_id:request.params.id})
        .then(producto => response.json(producto))
        .catch((err) => response.json(err));
}


module.exports.updateProduct = (request, response) => {
    Producto.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updateProduct => response.json(updateProduct))
    .catch(err => response.json(err))
}
module.exports.deleteProduct = (request, response) => {
    Producto.deleteOne({ _id: request.params.id })
        .then(producto => response.json(producto))
        .catch(err => response.json(err))
}
