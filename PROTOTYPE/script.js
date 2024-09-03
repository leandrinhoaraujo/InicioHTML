/*
  Prototype

  * prototype-based language
  * prototype chain
  * __proto__


posso pegar propriedades prototipadas para mim no próprio JS.

ex: "Lele".length
    25.0.toString
    true.valueOf
    "lele".__proto__

________________________________________________________________________________________________________

  Type conversion (typecasting) vs type coersion

  * Alteração de um tipo de dado para outro tipo
  coersion java script faz a mudança por si só / conversion o proprio usuario faz

____________________________________________________________________________________________________________

  manipulando String e Numeros

  transformar string em numero e numero em string
*/

let string = "123"
console.log(Number(string))
let number = 123
console.log(String(number))

//quantos caracteres tem uma palavra e quantos digitos tem um numero 

let word = "paralelepipedo"
console.log(word.length)
let number1 = 10000000
console.log(String(number1).length)

//Transformar um numero quebrado com 2 casas decimais e trocae . por ,
let number2 = 125.14554646
console.log(number2.toFixed(2).replace(".", ","))

//transformar letras minusculas em maiusculas.
let word1 = "Programar é show di boula"
console.log(word1.toLowerCase())

/*Para separar um texto por espaços, pode-se usar o método split(" "), 
que transforma o texto em um array de strings baseado no argumento, 
que no caso são os espaços. Para juntar esse array é possível usar o 
método join('"), que juntaria essas palavras sem nenhum separador, porém 
colocando um argumento, no caso um underscore ( join("_") ) as palavras são 
juntadas com o argumento de separador.

SEPARE UM TEXTO QUE CONTEM ESPAÇOS, EM UM NOVO ARRAY ONDE CADA TEXTO É UMA POSIÇÃO
DO ARRAY. DEPOIS DISSO, TRANSFORME O ARRAY EM UM TEXTO E ONDE ERAM ESPAÇOS, COLOQUE_
*/

let phrase = "Eu quero uma namoradinha!"
//let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")

// Verificar se o texto contem a palavra amor, includes usa a maiuscula pra diferenciar
let phrase1 = "Eu só quero beijar!"
phrase1.includes("amor")


// Manipulando array 
//let myArray = new Array('a','b','c')

// Contar elementos de um array
let myArray = new Array('a','b','c')
console.log(muArray.length)

// Transformar uma cadeia de caracteres em um elemento de um array
let word2 = "manipulação"
console.log(Array.from(word2))

/*Existem várias maneiras de manipular arrays, como: o método push(), 
que adiciona um elemento no final do array, o método unshift(), 
que adiciona um elemento no começo do array, o método pop(), 
que retira um elemento do final do array, o método shift(), 
que retira um elemento do começo do array, o método slice(), 
que recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar, 
e retorna os valores destas posições, o método splice(), 
que recebe como argumentos a posição de início e a quantidade 
de elementos que você quer remover e o método indexOff(), 
que encontra o index do valor que recebe como argumento em um array.*/

//Veremos nesta aula sobre operadores de atribuição. Quando falamos em atribuição, queremos na verdade dizer assignment, que já vimos bastante, mas podemos também realizar diferentes tipos de atribuição, usando operadores aritméticos.

//Exemplos:

// Operadores de atribuição (Assignment)
let x

// assignment normal:
x = 1

// addition assignment (adição):
x += 2

// subtraction assignment (subtração):
x -= 1

// multiplication assignment (multiplacação):
x *= 2

// division assignment (divisão):
x /= 2

// exponetiation assignment (exponenciação):
x **= 2

// remainder assignment (resto de divisão):
x %= 2
