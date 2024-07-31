
// This the most recommended way to create an empty list
const arr = []
console.log(arr)

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length
console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)
console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

//Creating an array using split
let js = 'JavaScript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')
console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')
console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

//Accessing array items
const fruits2 = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits2[0] // we are accessing the first item using its index
console.log(firstFruit) // banana
secondFruit = fruits2[1]
console.log(secondFruit) // orange
let lastFruit = fruits2[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows
let lastIndex = fruits2.length - 1
lastFruit = fruits2[lastIndex]
console.log(lastFruit)  // lemon

const countries2 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ] // List of countries
  console.log(countries2)      // -> all countries in array
  console.log(countries2[0])   //  -> Albania
  console.log(countries2[10])  //  -> Kenya
  let lastIndex2 = countries2.length - 1;
  console.log(countries2[lastIndex]) //  -> Kenya

//An array is mutable(modifiable). Once an array is created, we can modify the contents
const numbers3 = [1, 2, 3, 4, 5]
numbers3[0] = 10      // changing 1 at index 0 to 10
numbers3[1] = 20      // changing  2 at index 1 to 20

console.log(numbers3) // [10, 20, 3, 4, 5]

//Array Constructor
const arrB = Array() // creates an an empty array
console.log(`array arrb: ${arrB}`)

const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]

//Creating static values with fill
const arrC = Array() // creates an an empty array
console.log(arrC)
const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']
const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]
const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
console.log(four4values) // [4, 4, 4, 4]

//Concatenating array using concat
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList) // [1, 2, 3, 4, 5, 6]

//Getting index an element in arr array
const numbers4 = [1, 2, 3, 4, 5]

console.log(numbers4.indexOf(5)) // -> 4
console.log(numbers4.indexOf(0)) // -> -1
console.log(numbers4.indexOf(1)) // -> 0
console.log(numbers4.indexOf(6)) // -> -1

// let us check if a banana exist in the array
//const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')  // 0

if(index === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does exist in the array
// we can use also ternary here
index === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array')

// let us check if an avocado exist in the array
let indexOfAvocado = fruits.indexOf('avocado')  // -1, if the element not found index is -1
if(indexOfAvocado === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does not exist in the array

const numbers5 = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers5.lastIndexOf(2)) // 7
console.log(numbers5.lastIndexOf(0)) // -1
console.log(numbers5.lastIndexOf(1)) //  6
console.log(numbers5.lastIndexOf(4)) //  3
console.log(numbers5.lastIndexOf(6)) // -1

console.log(numbers5.includes(5)) // true
console.log(numbers5.includes(0)) // false
console.log(numbers5.includes(1)) // true
console.log(numbers5.includes(6)) // false

//Checking array
console.log(Array.isArray(numbers5)) // true
const number6 = 100
console.log(Array.isArray(number6)) // false

//Converting array to string
console.log(numbers.toString()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

//Joining array elements
console.log(numbers.join()) // 1,2,3,4,5

console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

console.log(webTechs.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

//Slice array elements
//Slice: To cut out a multiple items in range. 
//It takes two parameters:starting and ending position. 
//It doesn't include the ending position
const numbers7 = [1,2,3,4,5]
console.log(numbers7.slice()) // -> it copies all  item
console.log(numbers7.slice(0)) // -> it copies all  item
console.log(numbers7.slice(0, numbers.length)) // it copies all  item
console.log(numbers7.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position

//Splice method
//It takes three parameters:Starting position, number of times to be removed 
//and number of items to be added
const numbers8 = [1, 2, 3, 4, 5]
numbers8.splice()
console.log(`numbers8: ${numbers8}`)                // -> remove all items

numbers8.splice(0,1)
console.log(numbers8)            // remove the first item

const numbers9 = [1, 2, 3, 4, 5, 6]
numbers9.splice(3, 3, 7, 8, 9)
console.log(numbers9.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

//Adding item to an array using push
const arrD  = ['item1', 'item2','item3']
arrD.push('new item')
console.log(arrD)
// ['item1', 'item2','item3','new item']

const numbers10 = [1, 2, 3, 4, 5]
numbers10.push(6)
console.log(numbers10) // -> [1,2,3,4,5,6]
numbers10.pop() // -> remove one item from the end
console.log(numbers10) // -> [1,2,3,4,5]

//shift: Removing one array element in the beginning of the array
const numbers11 = [1, 2, 3, 4, 5]
numbers11.shift() // -> remove one item from the beginning
console.log(numbers11) // -> [2,3,4,5]

//unshift: Adding array element in the beginning of the array
const numbers12 = [1, 2, 3, 4, 5]
numbers12.unshift(0) // -> add one item from the beginning
console.log(numbers12) // -> [0,1,2,3,4,5]

//reverse the order of an array
numbers12.reverse() // -> reverse array order
console.log(numbers12) // [5, 4, 3, 2, 1, 0]
numbers12.reverse()
console.log(numbers12) // [0, 1, 2, 3, 4, 5]

//sort: arrange array elements in ascending order
// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
  
  webTechs.sort()
  console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]
  
  webTechs.reverse() // after sorting we can reverse it
  console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

  