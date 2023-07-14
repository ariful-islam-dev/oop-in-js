
class Person {


    constructor(name, email){
        this._name = name
        this._email = email

        
    }
    get name(){
        console.log('This is a function call')
        return this._name.toUpperCase()
    }

    set name(value){
        this._name = value
    }
    get email(){
        return this._email.toLowerCase()
    }

    set email(value){
        this._email = value
    }

    

    print(){
        console.log(this + '')
    }

    toString(){
        return ` Name: ${this._name}, email: ${this._email}`
    }


}


module.exports = Person;


