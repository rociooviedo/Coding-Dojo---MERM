const mongoose = require("mongoose");

mongoose.set('strictQuery', true)

mongoose.connect("mongodb://127.0.0.1:27017/JokeSchema", {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    })
    .then(() => console.log("Se ha establecido la conexión a la base de datos"))
    .catch(err => console.log("Ocurrió un error al conectar a la base de datos", err));