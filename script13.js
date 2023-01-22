let rollNumber=[2,3,4,5,6,7,8,9]
console.log(rollNumber.length)
console.log(rollNumber[0])

for(let i=0 ; i<=rollNumber.length-1 ; i++){
console.log(rollNumber[i])
console.log(i)
}

let marks=[20,30,22,56,70,90,11]
let finalMarks=[]
for(let i=0 ; i<marks.length ; i++){
console.log(i)
console.log(marks[i])    
let result=marks[i]+5
finalMarks.push(result)
}
console.log(finalMarks)

let exammarks=[2,3,4,5]
let fiMarks=[]
for(let i=0 ; i<exammarks.length ; i++){
    console.log(i)
    console.log(exammarks[i])
    let result=exammarks[i]+5
    fiMarks.push(result)
}
console.log(fiMarks)

let rollNo=[22,44,33,56,11,10,34]
let greater20=[]
for(let i=0 ; i<=rollNo.length ; i++){
    console.log(i)
    console.log(rollNo[i])
if(rollNo[i]>20){
    greater20.push(rollNo[i])
}
}
console.log(greater20)

let num1=[3,5,8,10]
let sum=0
for(let i=0 ; i<num1.length ; i++){
    sum=sum+num1[i]
}
console.log(sum)

let marksA =[2,3,4,5]
let fMarks=marksA.map(function(element, index, array){
    return element + 5
})
console.log(fMarks)

let AccNo=[15, 20, 30, 17, 40]
let greater17=AccNo.filter(function(element, index, array){
    return element>17
})
console.log(greater17)

let Number=[5,10,20,30,50]
let add=Number.reduce(function(acc, el,index,array){
    return acc + el 
},0)
console.log(add)

let student=["mayuri","ram","sham","radha"]
for(let i=0 ; i<student.length ; i++){
    console.log('Welcome '+ student[i])
}

student.forEach(function(el,index,arr){
    console.log('welcome '+el)
})


