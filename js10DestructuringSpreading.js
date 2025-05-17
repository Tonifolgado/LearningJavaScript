//Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable
const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers
console.log(numOne, numTwo, numThree)
//  1 2 3

const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names
console.log(firstPerson, secondPerson,thirdPerson, fourthPerson)

const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants
console.log(e,pi,gravity, bodyTemp, boilingTemp)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  const [frontEnd, backEnd] = fullStack
  console.log(frontEnd)
  console.log(backEnd)
//  ["HTML", "CSS", "JS", "React"]
//  ["Node", "Express", "MongoDB"]

//If we like to skip on of the values in the array we use additional comma. 
//The comma helps to omit the value at that specific index
const numbers2 = [1, 2, 3]
let [numOne2, , numThree2] = numbers2 //2 is omitted
console.log(numOne2, numThree2)
//1 3

const namesb = ['Asabeneh', 'Brook', 'David', 'John']
let [, secondPersonb, , fourthPersonb] = namesb // first and third person is omitted
console.log(secondPersonb, fourthPersonb)
//Brook John

//We can use default value in case the value of array for that index is undefined
const namesC = [undefined, 'Brook', 'David']
let [
  firstPersonC = 'Asabeneh',
  secondPersonC,
  thirdPersonC,
  fourthPersonC = 'John'
] = namesC
console.log(firstPersonC, secondPersonC, thirdPersonC, fourthPersonC)  
//Asabeneh Brook David John

//We can not assign variable to all the elements in the array. 
//We can destructure few of the first 
//and we can get the remaining as array using spread operator(...).
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
console.log(num1, num2, num3)
console.log(rest)
//1 2 3
//[4, 5, 6, 7, 8, 9, 10]

//Destructuring during iteration
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
for (const [country, city] of countries) {
console.log(country, city)
}
//Finland Helsinki
//Sweden Stockholm
//Norway Oslo
  
for(const [first, second, third] of fullStack) {
  console.log(first, second, third)
  }
//HTML CSS JS
//Node Express MongoDB

//DESTRUCTURING OBJECTS
const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  let { widthB, heightB, areaB, perimeterB } = rectangle
  console.log(widthB, heightB, areaB, perimeterB)
  // 20 10 200 undefined

//Renaming during destructuring
  let { width: w, height: h, area: a, perimeter: p } = rectangle
  console.log(w, h, a, p)
//20 10 200 undefined

//If the key is not found in the object the variable will be assigned to undefined. 
//Sometimes the key might not be in the object, in that case we can give a default value during declaration.
  let { widthC, heightC, areaC, perimeterC = 60 } = rectangle
  console.log(width, height, area, perimeter) //20 10 200 60

  //Let us modify the object:width to 30 and perimeter to 80
  const rectangle2 = {
    width: 30,
    height: 10,
    area: 200,
    perimeter: 80
  }
  let { width, height, area, perimeter = 60 } = rectangle
  console.log(width, height, area, perimeter) //30 10 200 80

  //Object parameter without destructuring
  // Without destructuring
const rect = {
    width: 20,
    height: 10
  }
  const calculatePerimeter = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
  }
  console.log(calculatePerimeter(rect)) // 60

//Another Example
const person = {
    firstName: 'Antonio',
    lastName: 'Alvarez',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
  }
  // Let us create a function which give information about the person object without destructuring
  const getPersonInfo = obj => {
    const skills = obj.skills
    const formattedSkills = skills.slice(0, -1).join(', ')
    const languages = obj.languages
    const formattedLanguages = languages.slice(0, -1).join(', ')
  
    personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
      obj.age
    } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
      skills[skills.length - 1]
    }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
  
    return personInfo
  }
  
  console.log(getPersonInfo(person))

//Object parameter with destructuring

const calculatePerimeter2 = ({ width, height }) => {
    return 2 * (width + height)
  }
console.log(calculatePerimeter2(rect)) // 60

// Let us create a function which give information about the person object with destructuring
const getPersonInfo2 = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages
  }) => {
    const formattedSkills = skills.slice(0, -1).join(', ')
    const formattedLanguages = languages.slice(0, -1).join(', ')
  
    personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
      skills[skills.length - 1]
    }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
  
    return personInfo
  }
  console.log(getPersonInfo2(person))
  /*
  Antonio Alvarez lives in Finland. He is  250 years old. 
  He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. 
  He speaks Amharic, English and a little bit of Suomi(Finnish)
  */

  //Destructuring object during iteration
  const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
    ]
    
    for (const {task, time, completed} of todoList){
      console.log(task, time, completed)
    }
//Prepare JS Test 4/1/2020 8:30 true
//Give JS Test 4/1/2020 10:00 false
//Assess Test Result 4/1/2020 1:00 false

//Spread or Rest Operator
//When we destructure an array we use the spread operator(...) to get the rest elements as array. 
//In addition to that we use spread operator to spread array elements to another array.
const numsA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1a, num2a, num3a, ...resta] = nums
console.log(num1a, num2a, num3a)
console.log(resta)
//1 2 3
//[4, 5, 6, 7, 8, 9, 10]

//Spread operator to copy array
const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]
const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]
const wholeNumbers = [...evens, ...odds]
console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)
//[0, 2, 4, 6, 8, 10]
//[1, 3, 5, 7, 9]
//[0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]

//Spread operator to copy object
const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
  }
  const copiedUser = {...user}
  console.log(copiedUser)
//  {name: "Asabeneh", title: "Programmer", country: "Finland", city: "Helsinki"}

//Modifying or changing the object while copying
  const copiedUserB = {...user, title:'instructor'}
  console.log(copiedUserB)
//  {name: "Asabeneh", title: "instructor", country: "Finland", city: "Helsinki"}

//Spread operator with arrow function
//to write an arrow function which takes unlimited number of arguments we use a spread operator. 
//If we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array.
const sumAllNums = (...args) => {
    console.log(args)
  }
  sumAllNums(1, 2, 3, 4, 5)
//[1, 2, 3, 4, 5]


const sumAllNums2 = (...args) => {
    let sum = 0
    for (const num of args){
      sum += num
    }
    return sum
  }
console.log(sumAllNums2(1, 2, 3, 4, 5))

