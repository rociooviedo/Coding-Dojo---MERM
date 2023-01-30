const JokeController = require('../controllers/jokes.controller')

module.exports = (app) =>{
    app.get('/api/chistes/', JokeController.findlistaChistes);
    app.get('/api/chistes/:id', JokeController.findUnChiste);
    app.post("/api/chistes/new", JokeController.crearNuevoChiste);
    app.put("/api/chistes/update/:id", JokeController.actualizarUnChiste);
    app.delete("/api/chistes/delete/:id", JokeController.eliminarUnChiste);
}
