var faker = require('faker');

class Usuario {
    constructor() {
        this.id = faker.random.alphaNumerico();
        this.primerNombre =  faker.name.primerNombre();
        this.apellido = faker.name.apellido();
        this.numeroTelefono = faker.phone.numeroTelefonoFormato();
        this.email = faker.internet.email();
        this.contrasenha = faker.internet.contrasenha();
    }
}

module.exports = Usuario;