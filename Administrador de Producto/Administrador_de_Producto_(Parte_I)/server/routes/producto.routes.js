const ProductoController = require('../controllers/producto.controller')
module.exports = function(app){
    app.get('/api/producto' , ProductoController.getAllProducts);
    app.get('/api/producto/:id' , ProductoController.getProduct);
    app.post('/api/producto', ProductoController.createProducto);
}
