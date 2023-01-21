//Clase padre
class Tarjetas{
    constructor(nombre, costo){
        this.nombre = nombre;
        this.costo = costo;
    }
}
//Clases hijos (Unidad y Efectos)
class Unidad extends Tarjetas{
    constructor(nombre, costo, poder, resiliencia){
        super(nombre, costo);
        this.poder = poder;
        this.resiliencia = resiliencia;
    }
    attack(target) {
        //reduce res de power
        if (target instanceof Unidad) {
            target.resiliencia -= this.poder;
            console.log(this.nombre  + " ataca a " + this.nombre);
        } 
        else {
            //Error
            throw new Error("¡El objetivo debe ser una unidad!");
        }
    }
}
class Efectos extends Tarjetas{
    constructor(nombre, costo, texto, stat, magnitud){
        super(nombre, costo);
        this.texto = texto;
        this.stat = stat;
        this.magnitud = magnitud;
    }
    play( target ) {
        if( target instanceof Unidad ) {
        // implementa el texto de carta aquí
            if (this.stat == "Resiliencia") {
                target.resiliencia += this.magnitud;
            } 
            else {
                target.poder += this.magnitud;
            }
            console.log(this.texto + ' aplicado a: ' + this.nombre);
        } else {
            throw new Error( "¡El objetivo debe ser una unidad!" );
        }
    }
}
//Crear tarjetas
//Unidad
const ninja_cinturon_rojo = new Unidad("Ninja Cinturón Rojo", 3, 3, 4);
const ninja_cinturon_negro = new Unidad("Ninja Cinturón Negro", 4, 5, 4);
//Efectos
const algoritmo_dificil = new Efectos("Algoritmo Difícil", 2, "aumentar la resistencia del objetivo en 3", "resiliencia" , +3);
const rechazo_de_promesa_no_manejado = new Efectos("Rechazo de promesa no manejado", 1, "reducir la resistencia del objetivo en 2 ", "resiliencia" , -2);
const programacion_en_pareja = new Efectos("Programación en pareja", 3, "aumentar el poder del objetivo en 2", "poder" , +2);
//Juega el siguiente escenario
console.log("Inicio de Juego");
//Turno 1
console.log(ninja_cinturon_rojo);
algoritmo_dificil.play(ninja_cinturon_rojo);
//Turno 2
console.log(ninja_cinturon_negro);
rechazo_de_promesa_no_manejado.play(ninja_cinturon_rojo);
//Turno 3
programacion_en_pareja.play(ninja_cinturon_rojo);
ninja_cinturon_rojo.attack(ninja_cinturon_negro);
console.log("Fin de Juego");
console.log( ninja_cinturon_rojo);
console.log(ninja_cinturon_negro);