// Function expression
// Function anonymous


//parameters of function
const sum = function(number1, number2){

  console.log(number1 + number2)

}



sum(2,3)  //arguments

//Function scope
let subject = 'create video'
function createThink(subject) {
  console.log(`este é ${subject}`)
  subject = 'nothing'
  return subject
}

console.log(createThink(subject))
console.log(subject)

//function hoisting
//______________________________________
// sayMyName()

// function sayMyName(){
//   console.log('lele')
// }
//_______________________________________


//arrow function
const sayMyName = () => {
  console.log('lele')
}

sayMyName()


