/*
Function() constructor

  * expressão new
  * criar um novo projeto
  * this keyword

*/

function Person(name) {
  this.name = name,
  this.walk = function () {
    return this.name + "Está andando";
  }
}
const lele = new Person('Lele')
const nikito = new Person ('nikito')
console.log(lele.walk())
console.log(nikito.walk())