const person = {};
person.name = "Ariful Islam"
person.email="arifulislam@gmail.com"
// console.log(person);

class Person {

    constructor(name, email){
        this.name = name
        this.email = email
    }

    changeName(name){
        this.name = name
    }
  

    sendEmail(msg){
        console.log('to log(...data: any[]')
        console.log("Sending email", msg)
    }

    print(){
        console.log(this)
    }
}


const p1 = new Person("Ariful Islam", "ariful@gmail")
const p2 = new Person("Abdullah Al Zarif", "zarif@gmail.com")
const p3 = new Person("Assadullah Al Labib", "labib@gmail.com")

// p1.print()
p1.changeName('Ariful Islam Raju')
p3.changeName('Labib')
p3.print()