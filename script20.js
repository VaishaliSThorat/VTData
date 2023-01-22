let students = [
    {
        fullName:"Vaishali Thorat",
        age:29,
        skills:["quality testing", "mansucript screening"],
        city:"pune"

    },
    {
        fullName:"Divya Sharma",
        age:30,
        skills:["quality testing", "microbial isolation", "PCR"],
        city:"nashik"
    },
    {
        fullName:"Yogita Patil",
        age:32,
        skills:["quality testing", "microbial isolation", "pharmaceutical testing"],
        city:"mumbai"
    }
]

console.log(students[2].age)
console.log(students[2]['city'])

//print all fullName
students.forEach(function(el){
    console.log(el.fullName)
})

// print city for all students
students.forEach(function(el){
    console.log(el.city)
})

// add state to all students
students.forEach(function(el){
    el.state = "Maharashtra"
})
console.log(students)

// count skills for every student
students.forEach(function(el){
    console.log(el.fullName+":"+el.skills.length)
})

// average age ofall studnets
let a1 =students.reduce(function(acc,el){
    return el.age + acc
},0)
console.log(a1/students.length)