
/*
A Promise is a way to handle asynchronous operations in JavaScript. 
It allows handlers with an asynchronous action's eventual success value or failure reason. 
This lets asynchronous methods return values like synchronous methods: 
instead of immediately returning the final value, the asynchronous method returns 
a promise to supply the value at some point in the future.

A Promise is in one of these states:
  pending: initial state, neither fulfilled nor rejected.
  fulfilled: meaning that the operation completed successfully.
  rejected: meaning that the operation failed.

A pending promise can either be fulfilled with a value, or rejected with a reason (error). 
As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained
*/

//CALLBACKS
//Let us see a callback function which can take two parameters. 
//The first parameter is err and the second is result. 
//If the err parameter is false, there will not be error other wise it will return an error
//In this case the err has a value and it will return the err block
const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback('It did not go well', skills)
    }, 2000)
  }
  
  const callback = (err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  }
  
  doSomething(callback)

// after 2 seconds it will print
//It did not go well

//In this case the err is false and it will return the else block which is the result
const doSomething2 = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback(false, skills)
    }, 2000)
  }
  
  doSomething2((err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  })

//// after 2 seconds it will print the skills
//["HTML", "CSS", "JS"]

//We can create a promise using the Promise constructor.
//Inside the parenthesis, it takes a callback function. 
//The promise callback function has two parameters which are the resolve and reject functions
/*
// syntax
const promise = new Promise((resolve, reject) => {
  resolve('success')
  reject('failure')
})
*/
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.length > 0) {
        resolve(skills)
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))

//["HTML", "CSS", "JS"]

// Promise
const doPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.includes('Node')) {
        resolve('fullstack developer')
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise2
    .then(result => {
      console.log(result)
    })
    .catch(error => console.error(error))

//Something wrong has happened

//FETCH API
//The Fetch API provides an interface for fetching resources (including across the network).
const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens

//ASYNC AND AWAIT
//Async and await is an elegant way to handle promises.
const square = async function (n) {
    return n * n
  }
  
  square(2)
//Promise {<resolved>: 4}
//The word async in front of a function means that function will return a promise. 
//The above square function instead of a value it returns a promise.
//To access the value from the promise, we will use the keyword await
const squareb = async function (n) {
    return n * n
  }
  const value = await squareb(2)
  console.log(value)
//4

const fetchData = async () => {
    try {
      const response = await fetch(url)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.error(err)
    }
  }
  console.log('===== async and await')
  fetchData()

  
