const mongoose = require("mongoose");

// Crear un esquema para Joke
const JokeSchema = new mongoose.Schema({
    setup: { 
        type: String,
        required:[true,"setup es requerido"],
        minlenght:[10, "setup debe tener al menos 10 caracteres"] 
    },
    punchline: 
    { 
        type: String,
        required:[true,"Punchline es requerido"],
        minlenght:[3, "Punchline debe tener al menos 3 caracteres"]
    }
},
    { timestamps: true }
)

// crear una función constructora para nuestro modelo y almacenarla en la variable 'Joke'
const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;