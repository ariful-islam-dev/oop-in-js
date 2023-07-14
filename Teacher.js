
const Person = require("./Person")
class Student extends Person {
    constructor(name, email,subject, salary){
        super(name, email)
        this._subject = subject; 
        this._salary = salary
    }

    get subject(){
        return this._subject;
    }

    get salary(){
        return this._salary
    }

    print(){
        super.print();
        console.log(`Subject ${this._subject}, Fee ${this._salary}`)
    }
}

module.exports = Student