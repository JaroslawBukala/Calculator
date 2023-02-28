
//create a variable for the first number
let firstNumber = Number.parseInt(prompt("Add first number"))
//create a variable for the second number
let secondNumber = Number.parseInt(prompt("Add first number"))
//create a variable to facilitate user choice
let whatOperation = prompt("What operation would you like to perform on those numbers")


//create conditions for the user choice of an operation
//call functions within the if statements


//create a function for adding
const addNumbers = (firstNumber, secondNumber) => {
   let total = firstNumber + secondNumber
   return `${firstNumber} + ${secondNumber} = ${total}`
}

//create a function for subtracting
const  subtractNumbers = (firstNumber, secondNumber) => {
   let total = firstNumber - secondNumber
   return `${firstNumber} - ${secondNumber} = ${total}`
}


//create a function for multiplying
const multiplyNumbers = (firstNumber, secondNumber) => {
   let total = firstNumber * secondNumber
   return `${firstNumber} * ${secondNumber} = ${total}`
}

//create a function for dividing
const divideNumbers = (firstNumber, secondNumber) => {
   let total = firstNumber/secondNumber
   return `${firstNumber} / ${secondNumber} = ${total}`
}


if(whatOperation == '+'){
    let sum = addNumbers(firstNumber, secondNumber)
    console.log(sum)
}
else if(whatOperation == '-'){
    let subtraction = subtractNumbers(firstNumber, secondNumber)
    console.log(subtraction)
}
else if(whatOperation == '*'){
    let multiply = multiplyNumbers(firstNumber, secondNumber)
    console.log(multiply)
}
else if(whatOperation == '/'){
    let divide = divideNumbers(firstNumber, secondNumber)
    console.log(divide)
}