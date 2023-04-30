//<p id = "hello" class ="bye" name = "hellohiby">Para</p>

let para = document.querySelector('p')
let byId = document.querySelector('#hello')
let byClass = document.querySelector('.bye')
let byName = document.querySelector('p[name="hellohiby"]')

console.log(para)
console.log(byId)
console.log(byClass)
console.log(byName)
console.log('---------------------')
let i = document.getElementById('hello')
console.log(i)


let liList = document.querySelectorAll('li')
console.log(liList)

for(let i = 0 ; i<liList.length ; i++){
    liList[i].style.color ="red"
}

let htmlC = document.getElementsByTagName('li')
console.log(htmlC)

// // liList
// // htmlC

let htmlClassCollection = document.getElementsByClassName('fruit')
let nodeListCollection = document.querySelectorAll('.fruit')

console.log(htmlClassCollection)
console.log(nodeListCollection)

// // document.getElementById()
// // document.getElementsByClassName()
// // document.getElementsByTagName()
let q1q = document.getElementsByName('a')
console.log(q1q)

// //Javascript

// //class and id

// // class
// // <h3 class = 'three'>headingThree</h3>

let g = document.querySelector('.three')
console.log(g)
g.classList.add('four')
g.classList.remove('three')
g.classList.toggle('four')
g.classList.toggle('four')

