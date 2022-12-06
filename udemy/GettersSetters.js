// let person = {
//     firstName: 'Alex',
//     lastName: 'White',
//     fullName: function (){
//         return this.firstName + ' ' + this.lastName
//     }
// }
// console.log(person.fullName())

//GETTER - get value as property
//SETTER allows update

let person = {
    firstName: 'Alex',
    lastName: 'Red',

    get fullName() {
        return this.firstName + ' ' + this.lastName
    },

    set fullName(value) {
        let name = value.split(' ')
        this.firstName = name[0]
        this.lastName = name[1]
    }
}
console.log(person)
person.fullName = 'Michael Jordan'
console.log(person.fullName)
