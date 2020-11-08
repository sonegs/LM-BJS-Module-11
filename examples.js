/*class TotalesDepartamento {
    constructor(descuento) {
        this.descuento = descuento;
        this.subtotal = 0;
        this.total = 0;
    }
    calculaTotal() {
        this.total = this.subtotal - (this.descuento * this.subtotal) / 100;
    }
}

const totalesPerfumeria = new TotalesDepartamento(10); // Se instancia la clase TotalesDepartamento, diciendole qué descuento tiene para que lo aplique al constructor
const totalesSupermercado = new TotalesDepartamento(20);
totalesPerfumeria.subtotal = 30; // le damos valor al subtotal
totalesPerfumeria.calculaTotal(); // llamamos a la funcion calculaTotal
console.log("Total Perfumería: ", totalesPerfumeria.total);
totalesSupermercado.subtotal = 50;
totalesSupermercado.calculaTotal();
console.log("Total Supermercado: ", totalesSupermercado.total);
*/
// GETTER Y SETTER
/*
class TotalesDepartamento {
    constructor(descuento) {
        this.descuento = descuento;
        this._subtotal = 0;
        this.total = 0;
    }
    set subtotal(nuevoValor) {
        this._subtotal = nuevoValor;
        this.total = this._subtotal - (this.descuento * this._subtotal) / 100;
    }
}
const totalesPerfumeria = new TotalesDepartamento(10);
totalesPerfumeria.subtotal = 30;
console.log("Total Perfumería: ", totalesPerfumeria.total);

*/

// HERENCIAS
/*
class Animal {
    constructor(nombre, piernas, ruido) {
        this.tipo = "animal";
        this.nombre = nombre;
        this.piernas = piernas;
        this.ruido = ruido;
    }
    habla() {
        console.log(`${this.nombre} dice ${this.ruido}`);
    }
    anda() {
        console.log(`${this.name} camina con ${this.piernas} piernas`);
    }
    set cazacomida(comida) {
        this.comida = comida;
    }
    get come() {
        return `${this.nombre} se come ${this.comida || "nada grouaun"}`;
    }
}

const laika = new Animal("Laika", 4, "woff");
laika.cazacomida = "huesos";
console.log(laika.come);

class Loro extends Animal {
    constructor(nombre) {
            // Llamamos al constructor del padre usando super
            super(nombre, 2, "Curuuukaaaak !!!");
            this.tipo = "loro";
        }
        // Sobreescribimos habla
    habla(amo) {
        super.habla();
        console.log(`Dame chocolatinas ${amo}`);
    }
}
console.log("*** Vamos a por el loro ****");
const paco = new Loro("Paco");
paco.cazacomida = "pipas";
console.log(paco.come);
paco.habla("Lissette");

*/