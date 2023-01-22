let names=["amol","ram","sham","sachin"]
console.log(names[0])

function addB(x,y){
    return[1,2,3]
}
let q1= addB(12,3)
console.log(q1[1])

names=["amol","ram","sham","sachin"]
let q2=names.push("sameer")
console.log(q2)
console.log(names)

let q3= names.unshift("rasika")
console.log(q3)
console.log(names)

let q4= names.pop()
console.log(q4)
console.log(names)

let q5= names.shift()
console.log(q5)
console.log(names)



let birthyear = [1989,1988,1987,1986]
let ages = [] // [33,34,35,36]
//[33,34,35,36]

for(let i = 0 ; i < birthyear.length ; i++){
    console.log(i)
    console.log(birthyear[i])
    console.log(2022-birthyear[i])
    let ag = 2022 - birthyear[i]
    ages.push(ag)
}
console.log(ages)


let numbers = [12,33,44,55,66,33]
let above40 = [] // [44,55,66]
// [44,55,66]

for(let i=0 ; i<numbers.length ; i++){
    console.log(i)
    console.log(numbers[i])
    if(numbers[i]>40){
        above40.push(numbers[i])
    }
}
console.log(above40)

let marks = [11,22,33]
let total = 0

for(let i=0 ; i<marks.length ; i++){
    console.log(i)
    console.log(marks[i])

    total = total + marks[i]
}
console.log(total)

let width = [35,45,67,88,90,100]
let below70 = []

for(let i=0 ; i<width.length ; i++){
    console.log(i)
    console.log(width[i])
    if(width[i]<70){
        below70.push(width[i])
    }
}
console.log(below70)