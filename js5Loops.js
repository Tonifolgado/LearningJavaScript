
for(let i = 0; i <= 5; i++){
    console.log(i)
  }
  // 0 1 2 3 4 5

for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
  }

  const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
  const newArr = []
  for(let i = 0; i < countries.length; i++){
    newArr.push(countries[i].toUpperCase())
  }
  // ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

let j = 0
  while (j <= 5) {
    console.log(j)
    j++
  }
  // 0 1 2 3 4 5

let k = 0
  do {
    console.log(k)
    k++
  } while (k <= 5)
  // 0 1 2 3 4 5

//We use for of loop for arrays. 
//It is very hand way to iterate through an array 
//if we are not interested in the index of each element in the array
const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}
// 1 2 3 4 5
for (const num of numbers) {
  console.log(num * num)
}
// 1 4 9 16 25
// adding all the numbers in the array
let sum = 0
for (const num of numbers) {
  sum = sum + num  
	// can be also shorten like this, sum += num
  // after this we will use the shorter synthax(+=, -=, *=, /= etc)
}
console.log(sum) // 15

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTechs) {
  console.log(tech.toUpperCase())
}
// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const tech of webTechs) {
  console.log(tech[0]) // get only the first letter of each element,  H C J R N M
}

const countries2 = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr2 = []
for(const country of countries2){
  newArr.push(country.toUpperCase())
}

console.log(newArr2)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

//Break is used to interrupt a loop
for(let i = 0; i <= 5; i++){
    if(i == 3){
      break
    }
    console.log(i)
  }
  // 0 1 2

//We use the keyword continue to skip a certain iterations
for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue
    }
    console.log(i)
  }
  // 0 1 2 4 5

//map() vs forEach() to iterate through an array
//The forEach() method executes a provided function once for each array element.
let numbers2 = [1, 2, 3, 4, 5]
let sum2 = 0
numbers2.forEach(function(num) {
  sum2 += num
})
console.log(sum2) // 15
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
let numbers3 = [1, 2, 3, 4, 5]
let squares = numbers3.map(function(num) {
  return num * num
})
console.log(squares) // [1, 4, 9, 16, 25]

//The forEach() method does not return anything, it just executes the function once for each element in the array.
//The map() method returns a new array, it does not change the original array.
//The forEach() method can be used to iterate through an array and perform some action on each element.
//The map() method can be used to create a new array based on the original array.

//Chaining methods
//map() is chainable. You can attach it reduce(), sort(), filter()
let numbers4 = [1, 2, 3, 4, 5]
let squares2 = numbers4.map(function(num) {
  return num * num
}).filter(function(num) {
  return num > 10
})
console.log(squares2) // [16, 25]
//The forEach() method is not chainable. You cannot attach it to other methods.


