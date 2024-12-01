/*
We use console object methods to show output on the browser console 
and we use document.write to show output on the browser document(view port). 
Both methods used only for testing and debugging purposes. 
The console method is the most popular testing and debugging tool on the browser. 
We use document.getElementById() when we like to interact with DOM try using JavaScript.
*/

//substitution
console.log('%d %s of JavaScript', 30, 'Days')
//30 Days of JavaScript

console.warn('This is a warning')
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error')

console.error('This is an error message')
console.error('We all make mistakes')

/*
The console.table() method display data as a table on the console. 
Displays tabular data as a table. 
The console.table() takes one required argument data, which must be an array or an object, 
and one additional optional parameter columns
*/
const namesB = ['Asabeneh', 'Brook', 'David', 'John']
console.table(namesB)

const userB = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 25
  }
  console.table(userB)

/*
Starts a timer you can use to track how long an operation takes. 
You give each timer a unique name, and may have up to 10,000 timers running on a given page. 
When you call console.timeEnd() with the same name, the browser will output the time, 
in milliseconds, that elapsed since the timer was started.
*/
const countriesB = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  
  console.time('Regular for loop')
  for (let i = 0; i < countriesB.length; i++) {
    console.log(countriesB[i][0], countriesB[i][1])
  }
  console.timeEnd('Regular for loop')
  
  console.time('for of loop')
  for (const [name, city] of countriesB) {
    console.log(name, city)
  }
  console.timeEnd('for of loop')
  
  console.time('forEach loop')
  countriesB.forEach(([name, city]) => {
    console.log(name, city)
  })
  console.timeEnd('forEach loop')


console.info('30 Days Of JavaScript challenge is trending on Github')
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')

/*
The console.assert() methods writes an error message to the console if the assertion is false. 
If the assertion is true, nothing happens. 
The first parameter is an assertion expression. 
If this expression is false, an Assertion failed error message will be displayed.
*/
console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}

//The console.group() can help to group different log groups
const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()

//console.groupCollapsed()
//indicates the start of a collapsed message group
//click the expand button to open the message group
console.groupCollapsed();
console.log('Expanded message');
//output  
//Expanded message
//groupEnd() closes the message group
console.log("Hola que tal");
console.group();
console.log("Hola otra vez, esta vez dentro de un grupo")
console.groupEnd();
console.log("and we are back");
//output
//Hola que tal
//Hola otra vez, esta vez dentro de un grupo
//and we are back

//console.count() prints the number of times the console.count() is called. 
//It takes a string label parameter. 
//It is very helpful to count the number of times a function is called.
const func = () => {
    console.count('Function has been called')
  }
  func()
  func()
  func()

//Function has been called: 1
//Function has been called: 2
//Function has been called: 3

//console.clear() cleans the browser console.
//it will also write a message in the console: "Console cleared"
console.clear();

//console.table() prints the data in a table format.
const namesC = ['Asabeneh', 'Brook', 'David', 'John']
const agesC = [20, 21, 19, 22]
const countriesC = ['Finland', 'Sweden', 'Norway', 'Denmark']
const data = [namesC, agesC, countriesC]
console.table(data)
//output
//[ Array(4), Array(4), Array(4)]
// 0: 'Asabeneh'
// 1: 'Brook'
// 2: 'David'
// 3: 'John'
// 4: Array(4)
// 0: 20
// 1: 21
// 2: 19
// 3: 22
// 4: Array(4)
// 0: 'Finland'
// 1: 'Sweden'
// 2: 'Norway'
// 3: 'Denmark'



