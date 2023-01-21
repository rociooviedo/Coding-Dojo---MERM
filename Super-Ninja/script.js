class Ninja {
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = 0;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
      //  console.log(this.nombre);
    }
    showStats(){
    /* console.log('Nombre: ' + this.nombre + '\n' + 'Fuerza: ' + this.fuerza + '\n' + 
        'Velocidad: ' + this.velocidad + '\n' + 'Salud: ' + this.salud + '\n')*/
    }
    drinkSake(){
        this.salud += 10;
    }

}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja{
    constructor(nombre){
        super(nombre);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log('Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.');
    }
}
// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
console.log(superSensei);
