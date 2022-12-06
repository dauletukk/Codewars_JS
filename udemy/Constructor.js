let car1 = {
    makes: 'Honda',
    model: 'Civic',
    vehicle() {
        return this.makes + ' ' + this.model
    }
}

console.log(car1.vehicle())

let car2 = {
    makes: 'Hyundai',
    model: 'Elantra',
    vehicle() {
        return this.makes + ' ' + this.model
    }
}

console.log(car2.vehicle())

function Car(vmakes, vmodel) {
    this.makes = vmakes,
        this.model = vmodel,
        this.vehicle = function () {
            return this.makes + ' ' + this.model
        }
}

let car3 = new Car('Kia', 'Forte')
console.log(car3.vehicle())