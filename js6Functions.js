
//Function without parameters
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
  }  
  square() // 4
  
  // function without parameter
function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
  
    console.log(sum)
  }
  addTwoNumbers() // a function has to be called by its name to be executed 

function printFullName (){
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}
printFullName() // calling a function

//Function Expressions
//The function is part of an expression, often assigned to a variable
//useful for anonymnous functions or when you want to control where the function is available
var functionExopression = function() {
  console.log("Function Expression");
}

//Function can also return values, if a function does not return values 
//the value of the function is undefined
function printFullName (){
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName())

//Function with parameters
function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
  }
console.log(areaOfCircle(10)) // should be called with one argument
  
function square(number) {
    return number * number
  }  
console.log(square(10))

// function with two parameters
function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
  }
sumTwoNumbers(10, 20) // calling functions
function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
  }
  console.log(sumTwoNumbers(10, 20))

  function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
  }
console.log(printFullName('Antonio', 'Alvarez'))

//Function with many parameters
// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
      //calling a function
console.log(sumArrayValues(numbers));  
  
const areaOfCircle = (radius) => {
        let area = Math.PI * radius * radius;
        return area;
      }
console.log(areaOfCircle(10))

//Function with unlimited number of parameters

/* 
Let us access the arguments object
A function declaration provides a function scoped arguments array like object. 
Any thing we passed as argument in the function can be accessed from arguments object inside the functions
*/
function sumAllNums() {
 console.log(arguments)
}
sumAllNums(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}
console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

//Unlimited number of parameters in arrow function
/*
Arrow function does not have the function scoped arguments object. 
To implement a function which takes unlimited number of arguments in an arrow function 
we use spread operator followed by any parameter name. 
Any thing we passed as argument in the function can be accessed as array in the arrow function.
*/
const sumAllNums2 = (...args) => {
 // console.log(arguments), arguments object not found in arrow function
 // instead we use a parameter followed by spread operator (...)
 console.log(args)
}
sumAllNums2(1, 2, 3, 4)
// [1, 2, 3, 4]

const sumAllNums3 = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}
console.log(sumAllNums3(1, 2, 3, 4)) // 10
console.log(sumAllNums3(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums3(15, 20, 30, 25, 10, 33, 40))  // 173

//ANONYMOUS FUNCTIONS
const anonymousFun = function() {
    console.log(
      'I am an anonymous function and my value is stored in anonymousFun'
    )
  }

//EXPRESSION FUNCTIONS are anonymous functions. 
//After we create a function without a name and we assign it to a variable. 
//To return a value from the function we should call the variable.
const square = function(n) {
    return n * n
  }
console.log(square(2)) // -> 4

//SELF INVOKING FUNCTIONS are anonymous functions which do not need to be called to return a value
(function(n) {
    console.log(n * n)
  })(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below
  
  let squaredNum = (function(n) {
    return n * n
  })(10)
  
console.log(squaredNum)

//ARROW FUNCTIONS
//Arrow function uses arrow instead of the keyword function to declare a function
const arrowFunction = () => console.log("Arrow Funciton");

// Let us change this declaration function to an arrow function
function square(n) {
    return n * n
  }
console.log(square(2)) // 4
  
const square = n => {
    return n * n
  }
console.log(square(2))  // -> 4  

// it can be written as follows, explicit return
const square = n => n * n  // -> 4


const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
      newArr.push(element.toUpperCase())
    }
    return newArr
  }
  
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))  
// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }
console.log(printFullName('Antonio', 'Alvarez'))

//another condensed way
const printFullName = (firstName, lastName) => `${firstName} ${lastName}`
console.log(printFullName('Juanito', 'Valderrama'))

//Function with default parameters
function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
  }
console.log(greetings())
console.log(greetings('Folgado'))

function generateFullName(firstName = 'Fernando', lastName = 'Ruiz') {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
  }
console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))

//write the above functions with arrow functions
const generateFullName2 = (firstName = 'Pedro', lastName = 'Perez') => {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
  }
  
  console.log(generateFullName2())
  console.log(generateFullName2('David', 'Smith'))


const calculateAge = (birthYear, currentYear = 2019) => currentYear - birthYear
console.log('Age: ', calculateAge(1819))

const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'
console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon

//Function Constructor
