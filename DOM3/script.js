// selecting the element
//  <h3 class = "one" id = "two" name = "nm">head3</h3>

//css selector

//by tagname

let headThree = document.querySelector('h3')
console.log(headThree)

//by ID
let idA = document.querySelector('#two')
console.log(idA)

//by class

let byclassName = document.querySelector('.one')
console.log(byclassName)

//by attribute
let byAttribute = document.querySelector('h3[name = "nm"]')
console.log(byAttribute)

idA.addEventListener('click', function(){
    idA.style.color = "red"
    idA.textContent = "Divya"
    
})

//  <h3 class = "one" id = "two" name = "nm">head3</h3>

let obj = {
    firstName: "Vaishali"
}
console.log(obj.firstName)
obj.firstName = "sumit"
console.log(obj.firstName)
console.log(idA.textContent)
idA.textContent = "Poorva"
console.log(idA)