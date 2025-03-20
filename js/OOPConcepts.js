console.log("OOPConcepts.js is loaded ...");

// ----------------------------> Classes
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDetails() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;  // template literals
    }
}

let vehicle = new Vehicle('Toyota', 'Corolla', 2019);
console.log(vehicle.getDetails());

// ----------------------------> Inheritance
class Car extends Vehicle {
    constructor(make, model, year, color) {
        super(make, model, year);  // calling the parent class constructor
        this.color = color;
    }

    getDetails() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`;
    }
}

let car = new Car('Toyota', 'Corolla', 2019, 'Red');
console.log(car.getDetails());
