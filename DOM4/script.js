let headOne = document.querySelector('h1')
console.log(headOne)

headOne.addEventListener('click', function(){
    headOne.style.color = "red"
})

let parents = {
    firstName: "Chinmay",
    lastName: "Deshpande",
    parent:{
        mother:"kanchan",
        father:"shirish"
    }
}
console.log(parents.parent.mother)
parents.parent.mother = "kanchan s"
console.log(parents.parent.mother)