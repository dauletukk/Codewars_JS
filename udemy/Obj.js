let person = {
    firstName: 'Alex',
    lastName: 'Brown',
    fullname (){
        console.log(person.firstName +' '+ person.lastName)
    },
    age: function (ageNumber){
        console.log(ageNumber + ' years old')
    }
}

console.log(person.lastName)

person.firstName = 'Daulet'
console.log(person.fullname())



