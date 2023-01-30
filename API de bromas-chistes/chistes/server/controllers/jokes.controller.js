const Joke = require("../models/jokes.model")

module.exports.findlistaChistes = (req, res) =>{
    Joke.find()
    .then(listaChistes => res.json({ jokes: listaChistes }))
    .catch(err => res.json({ message: "Error al intentar obtener todos los chistes", error: err }));
}

module.exports.findUnChiste = (req, res) =>{
    Joke.findOne()
    .then(unChiste => res.json({ jokes: unChiste }))
    .catch(err => res.json({ message: "Error al intentar obtener un chiste", error: err }));
}

module.exports.crearNuevoChiste = (req, res) =>{
    Joke.create(req.body)
    .then(nuevoChiste => res.json({ user: nuevoChiste }))
    .catch(err => res.json({ message: "Error al intentar crear un chiste", error: err }));
}

module.exports.actualizarUnChiste = (req, res) =>{
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(actualizarChiste => res.json({ user: actualizarChiste }))
    .catch(err => res.json({ message: "Error al intentar actualizar un chiste", error: err }));
}

module.exports.eliminarUnChiste = (req, res) =>{
    Joke.deleteOne({_id: req.params.id})
    .then(eliminarChiste => res.json({ user: eliminarChiste }))
    .catch(err => res.json({ message: "Error al intentar eliminar un chiste", error: err }));
}
