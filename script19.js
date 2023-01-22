let names = ["vaishali", "sanchita", "sapana", "vishal", "Sushma"]

let q1 = names[0]
console.log(q1)
let q2 = names[1]
let q3 = names[2]
let q4 = names[3]
let q5 = names[4]
console.log(q5)

let [a1, a2, a3, a4] = names
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)

let city = ["pune", "nagpur", "mumbai", "wardha", "satara"]
let [c1, c2, c3, c4] = city
console.log(c1)
console.log(c2)
console.log(c3)
console.log(c4)

let numbers = [[1, 2, 3], [4, 5, 6]]
let [[p1, p2, p3], [r1, r2, r3]] = numbers
console.log(p1)
console.log(r2)

let info = {
    firstname: "Vaishali",
    lastname: "Thorat",
    age: 29
}

let { firstname, lastname, age } = info
console.log(firstname)
console.log(lastname)
console.log(age)

let vehicle = {
    color: "red",
    type: "sedane"
}

//let{color, type} = vehicle
//console.log(color)
//console.log(type)

let { color: s1, type: s2 } = vehicle
console.log(s1)
console.log(s2)

let family = {
    sibling: {
        sister: "Gouri"
    },
    parents: {
        mother: "Prerna",
        father: "Rohan"
    }
}

//let{sibling, parents} = family
//console.log(sibling)
//console.log(parents)

//let {sibling:{sister},parents:{mother,father}} = family
//console.log(sister)
//console.log(parents)
//console.log(mother)
//console.log(father)


let students = {
    amol: {
        fullName: "amol rao",
        age: 32
    },
    poorva: {
        fullName: "poorva vyas",
        age: 44
    }
}

let { amol: { fullName: f1, age: ag1 }, poorva: { fullName: f2, age: ag2 } } = students
console.log(f1)
console.log(ag2)
console.log(f2)
console.log(ag1)