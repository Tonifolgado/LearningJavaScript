/*
Higher order functions are functions which take other function as a parameter 
or return a function as a value. 
The function passed as a parameter is called callback
*/
// a callback function, the name of the function could be any name
const callback = (n) => {
    return n ** 2
  }

  // function that takes other function as a callback
  function cube(callback, n) {
    return callback(n) * n
  }
console.log(cube(callback, 3))

// Higher order function returning an other function
const higherOrder = n => {
    const doSomething = m => {
      const doWhatEver = t => {
        return 2 * n + 3 * m + t
      }
      return doWhatEver
    }
    return doSomething
  }
  console.log(higherOrder(2)(3)(10))

  const numbers = [1, 2, 3, 4]


const sumArray = arr => {
    let sum = 0
    arr.forEach(function(element) {
      sum += element
    })
    return sum
  
  }
console.log(sumArray(numbers))

/*
we can execute some activities in a certain interval of time 
or we can schedule(wait) for some time to execute some activities

we use setInterval higher order function to do some activity continuously with in some interval of time. 
The setInterval global method take a callback function and a duration as a parameter. 
The duration is in milliseconds and the callback will be always called in that interval of time
*/
function sayHello() {
    console.log('Hello')
  }
setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s
// we can stop the interval by using clearInterval
const interval = setInterval(sayHello, 1000)
clearInterval(interval)

/*
we use setTimeout higher order function to execute some action at some time in the future. 
The setTimeout global method take a callback function and a duration as a parameter. 
*/
function sayHello() {
    console.log('Hello')
  }
  setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.
  // we can stop the timeout by using clearTimeout
  const timeout = setTimeout(sayHello, 2000)
  clearTimeout(timeout)

// FUNCTIONAL PROGRAMMING
/*
latest version of JavaScript introduced lots of built in methods 
which can help us to solve complicated problems. 
All builtin methods take callback function. 
forEach, map, filter, reduce, find, every, some, and sort
*/
//forEach: Iterate an array elements. We use forEach only with arrays. 
//It takes a callback function with elements, index parameter and array itself. 
//The index and the array optional.

arr.forEach(function (element, index, arr) {
    console.log(index, element, arr)
  })
// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
    console.log(index, element, arr)
  })
// The above code can be written using arrow function and explicit return
  arr.forEach((element, index, arr) => console.log(index, element, arr))

  let sum = 0;
  const nums = [1, 2, 3, 4, 5];
  nums.forEach(num => console.log(num))
  console.log(sum)

  const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
  countries.forEach((element) => console.log(element.toUpperCase()))

//map: Iterate an array elements and modify the array elements. 
//It takes a callback function with elements, index , array parameter and return a new array
const numb = [1, 2, 3, 4, 5]
const numbersSquare = numb.map((num) => num * num)
console.log(numbersSquare)
//[1, 4, 9, 16, 25]

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)

//Filter: Filter out items which full fill filtering conditions and return a new array
//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
    country.includes('land')
  )
  console.log(countriesContainingLand)
//['Finland', 'Ireland']

const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)
//['Albania', 'Bolivia','Ethiopia']
const countriesHaveFiveLetters = countries.filter(
    (country) => country.length === 5
  )
  console.log(countriesHaveFiveLetters)
//['Japan', 'Kenya']

const scores = [
    { name: 'Asabeneh', score: 95 },
     { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]
  const scoresGreaterEighty = scores.filter((score) => score.score > 80)
  console.log(scoresGreaterEighty)
//[{name: 'Asabeneh', score: 95}, { name: 'Lidiya', score: 98 },{name: 'Martha', score: 85},{name: 'John', score: 100}]

/*
reduce: Reduce takes a callback function. 
The call back function takes accumulator, current, and optional initial value as a parameter 
and returns a single value. 
It is a good practice to define an initial value for the accumulator value. 
If we do not specify this parameter, by default accumulator will get array first value
*/
const numbersb = [1, 2, 3, 4, 5]
const sumb = numbersb.reduce((acc, cur) => acc + cur, 0)
console.log(sumb) //15

//every: Check if all the elements are similar in one aspect. It returns boolean
const namesb = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = namesb.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr)
//true

//find: Return the first element which satisfies the condition
const ages2 = [24, 22, 25, 32, 35, 18]
const age2 = ages2.find((age) => age < 20)
console.log(age2) //18

const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const result2 = names2.find((name) => name.length > 7)
console.log(result2) //Asabeneh

//findIndex: Return the position of the first element which satisfies the condition
const names3 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages3 = [24, 22, 25, 32, 35, 18]
const result3 = names3.findIndex((name) => name.length > 7)
console.log(result3) // 0

const age3 = ages3.findIndex((age) => age < 20)
console.log(age3) // 5

//some: Check if some of the elements are similar in one aspect. It returns boolean
const bools = [true, true, true, true]
const areSomeTrue = bools.some((b) =>  b === true)
console.log(areSomeTrue) //true

const areAllStr2 = names.some((name) => typeof name === 'number') // Are all strings ?
console.log(areAllStr2) // false

/*
sort: The sort methods arranges the array elements either ascending or descending order. 
By default, the sort() method sorts values as strings.
This works well for string array items but not for numbers. 
If number values are sorted as strings and it give us wrong result. 
Sort method modify the original array. It is recommended to copy the original data before you start using sort method
*/
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted

const numbersf = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbersf.sort()) //[100, 3.14, 37, 9.81]
numbers.sort(function (a, b) {
  return a - b
})

console.log(numbersf) // [3.14, 9.81, 37, 100]

numbers.sort(function (a, b) {
  return b - a
})
console.log(numbers) //[100, 37, 9.81, 3.14]










