console.log('Hellow world')
console.log('Hello', 'World', '!')
console.log('HAPPY', 'NEW', 'YEAR', 2020)
console.log('Welcome', 'to', 30, 'Days', 'Of', 'JavaScript')

// Checking data types
console.log(typeof 'Asabeneh') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined

// Variables
// Declaring different variables of different data types
let firstName = 'Asabeneh' // first name of a person
let lastName = 'Yetayeh' // last name of a person
let country = 'Finland' // country
let city = 'Helsinki' // capital city
let age = 100 // age in years
let isMarried = true

console.log(firstName, lastName, country, city, age, isMarried)

// Variables can also be declaring in one line separated by comma
let named = 'Asabeneh', job = 'teacher', live = 'Finland'
console.log(named, job, live)

/*
Primitive data types are immutable(non-modifiable) data types. 
Once a primitive data type is created we cannot modify it.
If we try to modify the string stored in variable word, like word[0] = 'Y' should raise an error.
*/
let word = 'JavaScript'

let numOne = 3
let numTwo = 3
console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'
console.log(js == py)             //false 

let lightOn = true
let lightOff = false
console.log(lightOn == lightOff) // false

/*
Non-primitive data types are modifiable or mutable. 
We can modify the value of non-primitive data types after it gets created. 
Non-primitive data types cannot be compared by value. 
Even if two non-primitive data types have the same properties and values, they are not strictly equal.
*/
let nums = [1, 2, 3]
nums[0] = 10
console.log(nums)  // [10, 2, 3]

let nums = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(nums == numbers)  // false

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOne == userTwo) // false

/*
Do not compare non-primitive data types. Do not compare arrays, functions, or objects. 
Non-primitive values are referred to as reference types,
they are being compared by reference instead of value. 
Two objects are only strictly equal if they refer to the same underlying object.
*/
let nums = [1, 2, 3]
let numbersB = nums
console.log(nums == numbersB)  // true

let userOneB = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwoB = userOneB
console.log(userOneB == userTwoB)  // true

// -------------------------
// THE MATCH OBJECT
const PI = Math.PI
console.log(PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding
console.log(Math.round(PI))                // 3 to round values to the nearest number
console.log(Math.round(9.81))              // 10
console.log(Math.floor(PI))                // 3 rounding down
console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value
console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)
// Let us  create random number between 0 to 10
const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11
console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99
let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10
console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9
console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046
// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)
Math.cos(0)
Math.cos(60)


// Instanceof returns true 
// if the specified object is an instance of the specified object
let cars = ['Volvo','BMW']
cars instanceof Array; //true

//new
//operator to create an instance of a user-defined object type
//or of one of the built-in object types
const car1 = new Car("Eagle");

//void
//this operator allows evaluating expressions that prduce a value
//into places where an expression that evaluates to undefined is desired
void (2 == '2'); //undefined