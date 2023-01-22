let amol = {
    firstName:"amol",
    lastName:"rao",
    skills: ["java", "javascript", "python", "html"]
}

let mapA = new Map()
let names = ["chinmay", "sarika"]
let na = "dani"

console.log(mapA)
let a1 = mapA.size
console.log(a1)

//methods
//set()

mapA.set(1, 'admin')
mapA.set("firstName", 'Ramesh')
mapA.set(true, 'isMarried')
console.log(mapA)
console.log(mapA.size)

//get()
console.log(mapA.get(1))
console.log(mapA.get("firstName"))
console.log(mapA.get(true))

//delete

mapA.delete(1)
console.log(mapA)

//clear
//mapA.clear()
//console.log(mapA)

let mapB = new Map([
    [1, "admin"],
    [2, "customer"],
    [3, "operations"]
])

console.log(mapB)
let a = mapB.has(1)
console.log(a)

mapB.forEach(function(el,key){
    console.log(el,key)
})

