const AuthorController = require('../controllers/autores.controller');

module.exports = (app) => {
    app.get("/api/authors", AuthorController.getAllAuthors);
    app.get("/api/authors/:id", AuthorController.getOneAuthor);
    app.post("/api/authors/new/", AuthorController.createAuthor);
    app.put("/api/authors/update/:id", AuthorController.updateAuthor);
    app.delete("/api/authors/delete/:id", AuthorController.deleteAuthor);
}