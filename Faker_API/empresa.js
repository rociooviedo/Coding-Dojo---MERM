var faker = require('faker');

class Empresa {
    constructor() {
        this.id = faker.random.alphaNumerico();
        this.nombreEmpresa =  faker.empresa.nombreEmpresa();
        this.direccion = new Direccion ();
    }
}
class Direccion {
    constructor() {
        this.calle = faker.direccion.calle();
        this.ciudad = faker.direccion.ciudad();
        this.estado = faker.direccion.estado();
        this.codigoPostal = faker.direccion.codigoPostal();
        this.pais = faker.direccion.pais();
    }
}

module.exports = Empresa;