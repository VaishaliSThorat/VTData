let vaishali = {
    firstName: "vaishali",
    lastName: "thorat",
    age: 23,
    skills:["python", "javascript"]
}

//console.log(object.keys(vaishali))

for(let k of Object.keys(vaishali)){
    console.log(k)
}

for(let v of Object.values(vaishali)){
    console.log(v)
}
for(let [k,v] of Object.entries(vaishali)){
    console.log(k,v)
}

// program 2

let amol = {
    firstName: "amol",
    lastName: "rao",
    age: 45
}

for(let k of Object.keys(amol)){
    console.log(k)
}

for(let v of Object.values(amol)){
    console.log(v)
}

for(let [k,v] of Object.entries(amol)){
    console.log(k,v)
}

let mapA = new Map()

let mapB = new Map([
    [1, "admin"],
    [2, "customer"],
    [3, "new"]
])
console.log(mapB.size)

//set
mapB.set(4, "teacher")
console.log(mapB)

//get
let a = mapB.get(1)
console.log(a)

//has
let b= mapB.has(3)
console.log(b)

//clear

//mapB.clear()
//console.log(mapB)

// delete
//mapB.delete(2)
//console.log(mapB)

//forEach

mapB.forEach(function(v,k){
    console.log(v, k)
})

for(let k of mapB.keys()){
    console.log(k)
}

for(let v of mapB.values()){
    console.log(v)
}

for(let [k,v] of mapB.entries()){
    console.log(k,v)
}