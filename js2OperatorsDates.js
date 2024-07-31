
let firstName
console.log(firstName) //not defined, because it is not assigned to a value yet

let empty = null
console.log(empty) // -> null , means no value

let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram
const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)

// comparison operators
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

// && ampersand operator example
const check1 = 4 > 3 && 10 > 5         // true && true -> true
const check2 = 4 > 3 && 10 < 5         // true && false -> false
const check3 = 4 < 3 && 10 < 5         // false && false -> false
// || pipe or operator, example
const check4 = 4 > 3 || 10 > 5         // true  || true -> true
const check5 = 4 > 3 || 10 < 5         // true  || false -> true
const check6 = 4 < 3 || 10 < 5         // false || false -> false
//! Negation examples
let check7 = 4 > 3                     // true
let check8 = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true

// Increment or Decrement operator
// Preincrement
let count = 0
console.log(++count)        // 1
console.log(count)          // 1
// Postincrement
let count2 = 0
console.log(count2++)        // 0
console.log(count2)          // 1
let count3 = 0
console.log(--count3) // -1
console.log(count3)  // -1

// Ternary operators
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

  let number = 5
  number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`)
  number = -5
  
  number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`)

// WINDOW METHODS (not valid with NODEJS)
//alert('Welcome to 30DaysOfJavaScript')
//prompt('required text', 'optional text')
//let numberA = prompt('Enter number', 'number goes here')
//console.log(numberA)

// DATE OBJECT
// Creating a time object
const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
console.log(now.getFullYear()) // 2020
console.log(now.getMonth()) // 0 is January,  month(0-11)
console.log(now.getDate()) // 4, because the day of the month is 4th,  day(1-31)
console.log(now.getDay()) // 6, because the day is Saturday which is the 7th day
//  Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)
console.log(now.getHours()) // 0, because the time is 00:56:41
console.log(now.getMinutes()) // 56, because the time is 00:56:41
console.log(now.getSeconds()) // 41, because the time is 00:56:41
console.log(now.getMilliseconds()) // 0, because the time is 00:56:41
console.log(now.getTime()) // 1578092201341, this is the number of seconds passed from January 1, 1970 to today
console.log(now.getTimezoneOffset()) // 120, this is the number of minutes between the local time and the UTC time

const allSeconds = Date.now() //
console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to today
const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true

const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`La fecha actual es ${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56









