const ProductoController = require('../controllers/producto.controller')
module.exports = function(app){
    app.get('/api', ProductoController.index);
    app.post('/api/producto', ProductoController.createProducto);
}
