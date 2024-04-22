import Car from "./car.js";

export default class Wishlist {
    constructor() {
        this.list = [];
        this.nextId = 0;
    }

    add(make, model, year) {
        const car = new Car(++this.nextId, make, model, year);
        this.list.push(car);
    }

    addCar(event) {
        event.preventDefault();

        const make = document.getElementById("make").value;
        const model = document.getElementById("model").value;
        const year = document.getElementById("year").value;
        this.add(make, model, year);
    }

    remove(carId) {
        this.list = this.list.filter(car => car.id !== carId);
    }
}