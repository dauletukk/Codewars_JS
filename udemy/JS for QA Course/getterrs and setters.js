// Getters and Setters
let car = {
    model: "BMW",
    color: "Red",
    get currentCar(){
        return this.model + " " + this.color
    },
    set updatedCar(item){
        let car = item.split(" ");
        this.model = car[0];
        this.color = car[1];
    }
}
console.log(car.currentCar)
car.updatedCar = "Lada White"
console.log(car.currentCar)