// let names = ["gouri", "kajal", "poonam", "jaya", "monika"]

// Retrive

//console.log(names[3])

// update
//names[2] = "priya"
//console.log(names)

// add

//names.push("ram")
//console.log(names)
//names.unshift("Sham")
//console.log(names)

// remove

//names.pop("ram")
//console.log(names)
//names.pop("monika")
//console.log(names)
//names.shift("sham")
//console.log(names)
//names.splice(1, 2)
//console.log(names)

let names = ["gouri", "kajal", "poonam", "jaya", "monika"]

for (let i = 0; i <= names.length - 1; i++) {
    console.log(names[i])
}

let info = ["vaishali", "Thorat", 29, 33]
let info2 = {
    firstName: "vaishali",
    lastName: "Thorat",
    age: 29,
    rollNumber: 33
}

let info3 = {
    firstName: "Pooja",
    lastName: "Jagtap",
    age: 30,
    rollNumber: 44
}

// retrive

console.log(info3.firstName)
console.log(info3.lastName)
console.log(info3.age)
console.log(info3.rollNumber)
console.log(info3['firstName'])
console.log(info3['lastName'])
console.log(info3['age'])
console.log(info3['rollNumber'])

// update

info3.firstName = "sarika"
info3['firstname'] = 'rasika'
console.log(info3)

// add
info3.city = 'pune'
info3['lang'] = 'hindi'
console.log(info3)

// delete

delete info3.city
delete info3['lang']
console.log(info3)

let vehicle = {
    color: "red",
    type: 'sedane'
}

//retrive
console.log(vehicle.color)
console.log(vehicle['type'])

//add

vehicle.model = "M4"
console.log(vehicle)

//update
vehicle.color = "blue"
console.log(vehicle)

//delete

delete vehicle.type
console.log(vehicle)

// bracket

delete vehicle['color']
console.log(vehicle)
console.log(vehicle['type'])
vehicle['type'] = "suv"
vehicle['city'] = 'pune'
console.log(vehicle)

delete vehicle['city']
console.log(vehicle)

let animal = {
    color: "red",
    eyes: 2,
    legs: 4
}

// retrive

console.log(animal.color)
console.log(animal['eyes'])

//update

animal.color = 'brown'
console.log(animal)
animal['legs'] = '3'
console.log(animal)

//add

animal.hair = 'black'
console.log(animal)
animal['food'] = 'tortilla'
console.log(animal)

//delete

delete animal.eyes
console.log(animal)
delete animal['legs']
console.log(animal)



let studentInfo = {
    firstName: "Vijaya",
    lastName: "Ginelo",
    age: 30,
    RollNo: 22
}


//objectName.key = value
//to retrive all keys
for(let key in studentInfo){
    console.log(key)
}

//to retrive all value
for (let a in studentInfo){
    console.log(studentInfo[a])
}

//to retrive property

for(let key in studentInfo){
    console.log(key, studentInfo[key])
}