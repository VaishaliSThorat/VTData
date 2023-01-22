let chinmay = {
    firstName:"chinmay",
    lastName: "deshpande",
    age: 23,
    rollNo: 44
}
let amol = {
    firstName:"amol",
    lastName: "rao",
    age: 34,
    rollNo: 56
}

class PersonB {
    constructor(fn, ln, ag, rn){
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.rollNo = rn
}
}

let ram = new PersonB("ram", "dani", 34, 45)
let vinita = new PersonB("vinita", "khare", 30, 33)
console.log(ram)
console.log(vinita)