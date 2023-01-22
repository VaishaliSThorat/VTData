let cities = ["pune", "nagpur","mumbai", "satara", "solapur"]
// cities.slice[startIndex, endIndex]
console.log(cities.slice(2))
console.log(cities.slice(1, 4))
console.log(cities.slice(3))
console.log(cities.slice(-3, -1))
console.log(cities.slice(-4, 4))

let country = ["india", "pakistan", "italy", "USA", "korea", "england", "scotland", "zimbambwe"]
console.log(country.splice(5))
console.log(country.splice(2,2))
console.log(country.splice(0,1))
console.log(country.splice(2,3))

let numA = [3, 4, 5]
let numB = [6, 7, 8]
let q1 = numA.concat(numB)
console.log(q1)

let numC = [[2, 3, 4], [4, 6, 8], [23, 54, 67, 56]]
console.log(numC[1][2])
console.log(numC[2][3])
let q2 = numC.flat()
console.log(q2)
//              0   1    2    3    4    5
let grades = ['A', 'B', 'C', 'D', 'E', 'F']
let q3 = grades.fill('invalid', 2)
console.log(q3)
let q4 = grades.fill('invalid', 2, 4)
console.log(q4)
let q5 = grades.fill('invalid', 1, 2)
console.log(q5)
let q6 = grades.fill('AAA', 2, 2)
console.log(q6)


let info = ["Vaishali", "Thorat", 7499473614]
let a1 = info.join('-')
console.log(a1)
let a2 = info.join('@')
console.log(a2)
let a3 = info.join('*')
console.log(a3)
let a4 =info.join(' ')
console.log(a4)
console.log(typeof a3)

let city = ["pune", "mumbai", "nagpur", "bangalore", "kolkata"]
let b1 = city.includes("pune")
console.log(b1)

let b2 = city.sort()
console.log(b2)

let b3 = city.reverse()
console.log(b3)

let b4 = city.at(2)
console.log(b4)

let b5 = city.indexOf("pune")
console.log(b5)
let b6 = city.indexOf('kolkata')
console.log(b6)

let names = ["poorva", "mahesh", "kajal", "Karuna", "neha"]
let c1 = names.push("pooja")
console.log(c1)
console.log(names)

let c2 = names.unshift("pooja")
console.log(names)

let c3 = names.pop("pooja")
console.log(names)

let c4 = names.shift("pooja")
console.log(names)