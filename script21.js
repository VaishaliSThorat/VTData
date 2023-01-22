let students = [
    {
        fullName: "Vaishali Thorat",
        age: 29,
        skills: ["quality testing", "mansucript screening"],
        city: "pune"

    },
    {
        fullName: "Divya Sharma",
        age: 30,
        skills: ["quality testing", "microbial isolation", "PCR"],
        city: "nashik"
    },
    {
        fullName: "Yogita Patil",
        age: 32,
        skills: ["quality testing", "microbial isolation", "pharmaceutical testing"],
        city: "mumbai"
    }
]

// name of students above 30

let q1 = students.filter(function (el) {
    return el.age > 30
})
console.log(q1)
q1.forEach(function (element) {
    console.log(element.fullName)
})

let q2 = students.filter(function (el) {
    return el.age < 30
})
console.log(q2)
q2.forEach(function (element) {
    console.log(element.fullName)
})

students.forEach(function (el) {
    if (el.age > 30) {
        console.log(el.fullName)
    }
})

students.forEach(function (el) {
    if (el.age < 30) {
        console.log(el.fullName)
    }
})

// program 2 
// Name:(number of skills)

students.forEach(function (el) {
    console.log(el.fullName, ":", el.skills.length)
})

// program 3 (age above 30 and microbial isolation)

students.forEach(function (el) {
    if (el.age > 30 && el.skills.includes('microbial isolation')) {
        console.log(el.fullName)
    }
})

// program 4 (manuscript screening and pune city)

students.forEach(function (el) {
    if (el.skills.includes('manuscript screening') && el.city === "pune") {
        console.log(el.fullName)
    }
})

// program 5 add country = "India"

students.forEach(function (el) {
    el.country = "India"
})
console.log(students)

// program 6 (add excel skills to all students)

students.forEach(function (el) {
    el.skills.push('excel')
})
console.log(students)

//  program 7 (average age of all students)

let a1 = students.reduce(function(acc, el){
    return acc + el.age
},0)
console.log(a1/students.length)

