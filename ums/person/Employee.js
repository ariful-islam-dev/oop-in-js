const UniPerson = require("./UniPerson");

const _salary = Symbol("salary");
const _employeeID = Symbol("employeeID");


class Employee extends UniPerson {
  constructor(id, name, employeeID, salary) {
    super(id, name);
    this[_employeeID] = employeeID;
    this[_salary] = salary;
  
  }

  get employeeID() {
    return this[_employeeID];
  }
  get salary() {
    return this[_salary];
  }

  set salary(value){
    this[_salary]=value;
  }

  toString(){
    super.toString();
    console.log(`employeeID = ${this[_employeeID]}, Salary = ${this[_salary]}`)
  }
}


module.exports = Employee