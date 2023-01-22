let rollNumber = [1,2,3,4]//array
console.log(typeof rollNumber)

let a=20 //number
console.log(typeof a)

let firstName = "mayuri"
console.log(typeof firstName)

let fruit = "Apple"
console.log(fruit)
console.log(typeof fruit)

console.log(fruit[0])
console.log(fruit[1])
console.log(fruit[2])
console.log(fruit[3])

console.log(fruit[-1])

console.log(fruit.length)

//methods

//1.toUpperCase()

let a1 = fruit.toUpperCase()
console.log(a1)
console.log(typeof a1)

//2. toLowerCase()

let a2 = fruit.toLowerCase()
console.log(a2)

//3. indexOf()

let vegetable = "tomato"
let q1 = vegetable.indexOf('m')
console.log(q1)

let q2 = vegetable.indexOf('o')
console.log(q2)

let q3 = vegetable.indexOf('T')
console.log(q3)

//4. includes()

let student = "Tejaswini"
let i1 = student.includes('j')
console.log(i1)

let i2 = student.includes('T')
console.log(i2)

let i3 = student.includes("W")
console.log(i3)

let i4 = student.includes("Tej")
console.log(i4)

let i5 = student.includes("jaswi")
console.log(i5)

//5. startsWith()

let flower = "lily"

let w1 = flower.startsWith('l')
console.log(w1)

let w2 = flower.startsWith('lil')
console.log(w2)

let w3 = flower.startsWith('L')
console.log(w3)


