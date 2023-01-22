let number = [22, 33, 44, 55, 66, 77]
let q1 = number.map(function (el) {
    return el + 5
})
console.log(q1)

let numberA = [73, 33, 65, 99, 88, 44, 66]
let q2 = numberA.filter(function (el) {
    return el < 60
})
console.log(q2)



let numberB = [88, 45, 33, 66, 44, 86, 42]
let q3 = numberB.filter(function (el) {
    return el % 2 == 0
})
console.log(q3)

let numberC = [70, 25, 35, 75, 20, 27]
let q4 = numberC.reduce(function (acc, el) {
    return acc + el
}, 0)
console.log(q4)


let names = ["Vaishali", "Vishal", "Sapana", "Sushma", "Dnyanesh"]
let q5 = names.forEach(function (el) {
    console.log("Welcome " + el)
})
console.log(q5)

let q6 = numberA.find(function (el) {
    return el < 60
})
console.log(q6)

let numbersD = [30,40,50,60,70,80]
let q7 = numbersD.findIndex(function(el){
    return el < 50
})
console.log(q7)

let numbersE = [25, 33, 50, 42, 55, 65, 77]
let q8 = numbersE.some(function(el){
    return el>42
})
console.log(q8)

let q9 = numbersE.every(function(el){
    return el < 10
})
console.log(q9)