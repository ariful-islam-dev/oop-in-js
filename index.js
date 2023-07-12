const person = {};
person.name = "Ariful Islam"
person.email="arifulislam@gmail.com"
// console.log(person);

class Person {

    static className = 'PERSON';
    static PI=3.1415;

    constructor(name, email){
        this._name = name
        this._email = email

        
    }
    get name(){
        console.log('This is a function call')
        return this._name.toUpperCase()
    }

    set name(value){
        if(value.toLowerCase() === 'stack learner') return;
        this._name = value
    }
    get email(){
        return this._email.toLowerCase()
    }

    

    print(){
        console.log(this + '')
    }

    toString(){
        return ` Name: ${this._name}, email: ${this._email}`
    }

   static isValid(age){
        return age >=  18
    }

    static equal(p1,p2){
        if(p1.name !== p2.name) return false;

        if(p1.email !== p2.email) return false;

        return true;
    }
}


const p1 = new Person("Ariful Islam", "ariful@gmail")
const p2 = new Person("Abdullah Al Zarif", "zarif@gmail.com")
const p3 = new Person("Assadullah Al Labib", "labib@gmail.com");
const p6 = new Person("Assadullah Al Labib", "labib@gmail.com");

const p4 = {_name: "Test", _email: "test@gmail.com"};

const testUser = {
    name: "Test", 
    email: "test@gmail.com",
    age:25
};


let p5 = null;
if(Person.isValid(testUser.age)){
    p5 = new Person(testUser.name, testUser.email);
};
console.log(p5)

console.log(Person.equal(p6, p3 )) 