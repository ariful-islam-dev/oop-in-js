const person = {};
person.name = "Ariful Islam"
person.email="arifulislam@gmail.com"
// console.log(person);

class Person {

    constructor(name, email){
        this._name = name
        this._email = email
    }

    getName(){
        return this._name
    }

    setName(name){
        this._name = name
    }

    getEmail(){
        return this._name
    }

    setEmail(email){
        this._email = email
    }

    sendMail(msg){
        console.log("To:", this._email);
        console.log("Message ", this._sanitizeMsg(msg))
    }

    _sanitizeMsg(msg){
        return msg.trim().toLowerCase();
    }

    print(){
        console.log(this)
    }
}


const p1 = new Person("Ariful Islam", "ariful@gmail")
const p2 = new Person("Abdullah Al Zarif", "zarif@gmail.com")
const p3 = new Person("Assadullah Al Labib", "labib@gmail.com")

// p1.print()
p3.setEmail('ariful@yahoo.com')
p3.sendMail("Welcome    ")
p3.print()