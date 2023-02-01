const ProductoController = require('../controllers/producto.controller')
module.exports = function(app){
    app.get('/api/producto' , ProductoController.getAllProducts);
    app.get('/api/producto/:id' , ProductoController.getProduct);
    app.post('/api/producto', ProductoController.createProducto);
    app.put('/api/producto/:id', ProductoController.updateProduct);
    app.delete('/api/producto/:id', ProductoController.deleteProduct);
}
