// Methods

let car = {
    model: "BMW",
    color: "Red",
    currentCar: function () {
        return this.model + " " + this.color
    }
}

let car = {
    model: "BMW",
    color: "Red",
    currentCar() {
        return this.model + " " + this.color
    }
}

console.log()
