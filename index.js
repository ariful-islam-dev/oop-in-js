const person = {};
person.name = "Ariful Islam"
person.email="arifulislam@gmail.com"
// console.log(person);

class Person {

    constructor(name, email){
        this.name = name
        this.email = email
    }
}


const p1 = new Person("Ariful Islam", "ariful@gmail")
const p2 = new Person("Abdullah Al Zarif", "zarif@gmail.com")
const p3 = new Person("Assadullah Al Labib", "labib@gmail.com")
console.log(p1)
console.log(p2)
console.log(p3)