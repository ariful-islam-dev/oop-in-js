const Person = require("./Person");
const Teacher = require("./Teacher");
const Student = require("./Student")

const p = new Person ("HM Nayem", "hmnayen@gmail.com");
const t = new Teacher ("Ariful islam", 'ariful@gmail.com',"Computer Fundamental", 40000);
const s = new Student ("Azizul Islam", "azizul@gmail.com",["Computer 101", "Physics", "Math"], 400000)

console.log(p)
console.log(t)
// console.log(s)

s.print();
t.print();