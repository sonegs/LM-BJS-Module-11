// DECLARACION DE VARIABLES

const reservas = [{
        tipoHabitacion: "standard",
        desayuno: false,
        pax: 1,
        noches: 3
    },
    {
        tipoHabitacion: "standard",
        desayuno: false,
        pax: 1,
        noches: 4
    },
    {
        tipoHabitacion: "suite",
        desayuno: true,
        pax: 2,
        noches: 1
    }
];

// CASO 1: RESERVAS DE HOTEL

class TotalReservas {
    constructor(reserva) { // Se declara el constructor y sus variables
        this.clients = reserva.pax;
        this.iva = 0.21;
        this.days = reserva.noches;
        this.room = reserva.tipoHabitacion;
        this.totalClients = this.totalClients();;
        this.breakfast = reserva.desayuno;
        this.totalRoom = this.totalRoom();
        this.totalBreakfast = this.ifBreakfast();
        this.subtotal = this.subtotal();
        this.total = 0;
    }
    totalRoom() { // Calcula el precio segun el tipo de habitacion
        this.room === "standard" ? this.priceRoom = 100 : this.priceRoom = 150;
        return this.priceRoom;
    }

    totalClients() { // Añade 40 euros si hay más de un huesped
            this.clients > 1 ? this.priceClient = (this.clients - 1) * 40 : this.priceClient = 0;
            return this.priceClient;
        }
        // Esta función se añade para el ejercicio adicional
    ifBreakfast() {
        this.breakfast === true ? this.priceBreakfast = 15 : this.priceBreakfast = 1;
        return this.priceBreakfast;
    }

    subtotal() {
        // Este if distingue dos opciones, en función de si el desayuno ha sido añadido o no
        this.breakfast === true ? this.subtotal = (this.priceRoom * this.days) + this.priceClient + ((this.priceBreakfast * this.clients) * this.days) : this.subtotal = (this.priceRoom * this.days) + this.priceClient;
        return this.subtotal;
    }
    get total() {
        return this.subtotal + (this.iva * this.subtotal);
    }
    get separation() {
        return "*********************";
    }
    get printSubtotal() {
        return "El total sin IVA es: " + this.subtotal + " €";
    }

    get printTotal() {
        return "El total, IVA incluido, es: " + this.total + " €";
    }

}

const myBookings = reservas => reservas.map(reserva => { // Se utiliza map para iterar en el objeto
    const totalesCliente = new TotalReservas(reserva); // Se instancia la clase TotalesDepartamento, diciendole qué descuento tiene para que lo aplique al constructor
    console.log(totalesCliente.separation);
    console.log(totalesCliente.printSubtotal);
    console.log(totalesCliente.printTotal);
});
console.log("********************* CASO 1: RESERVA DE HOTELES *********************");
myBookings(reservas); // Llamamos a la función principal

// CASO 2: RESERVAS DE TOUR OPERADOR

class TourOperador extends TotalReservas { // se declara la clase hija
    constructor(reserva) {
        super(reserva); // se aplican los valores del constructor padre al hijo
        this.discount = 0.15;
    }

    totalRoom() { // modificamos el precio de las habitaciones
        this.priceRoom = 100;
        return this.priceRoom;
    }

    get total() {
        return this.subtotal + (this.iva * this.subtotal) * this.discount; // Se añade el descuento
    }

}

const tour = reservas => reservas.map(reserva => { // Se utiliza map para iterar en el objeto
    const totalesCliente = new TourOperador(reserva); // Se instancia la clase TotalesDepartamento, diciendole qué descuento tiene para que lo aplique al constructor
    console.log(totalesCliente.separation);
    console.log(totalesCliente.printSubtotal);
    console.log(totalesCliente.printTotal);
});

console.log("*********************");
console.log("********************* CASO 2: TOUR OPERADOR *********************");
tour(reservas); // Llamamos a la función principal