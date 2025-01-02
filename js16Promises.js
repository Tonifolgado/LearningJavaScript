
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

//Promise.all(iterable)
//It is a static method that takes an iterable as input and returns a single promise
//The returned promise fulfills when all of the input promises fulfill, with an array of the fulfillment values.
//It rejects immediately if any of the promises are rejected.
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 1 resolved')
    }, 1000)
  });
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 2 resolved')
    }, 2000)
  });
  let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 3 resolved')
    }, 3000)
  });
  Promise.all([p1, p2, p3])
    .then(values => {
      console.log(values);  // ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
    })
    .catch(error => {
      console.log(error.message);
    });

    //Promise.allSettled(iterable)
//Returns a new Promise that resolves after all promises in the iterable have settled 
//(either resolved or rejected)
//The returned promise resolves to an array of objects representing the outcome of each promise
let p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 1 resolved')
    }, 1000)
  });
  let p6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Promise 2 rejected')
    }, 2000)
  });
  let p7 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 3 resolved')
    }, 3000)
  });
  Promise.allSettled([p5, p6, p7])
    .then(values => {
      console.log(values);
      // [
      //   { status: 'fulfilled', value: 'Promise 1 resolved' },
      //   { status: 'rejected', reason: 'Promise 2 rejected' },
      //   { status: 'fulfilled', value: 'Promise 3 resolved' }
      // ]
    })
    .catch(error => {
      console.log(error.message);
    });

//Promise.race(iterable)
//Waits for the first promise to settle and its result/error becomes the outcome
let p8 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 1 resolved')
    }, 1000)
  });
let p9 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise 2 rejected'))
    }, 2000)
  });
  let p10 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 3 resolved')
    }, 500)
  });
  Promise.race([p8, p9, p10])
    .then(values => {
      console.log(values); // "Promise 3 resolved"
    })
    .catch(error => {
      console.log(error.message); // "Promise 2 rejected"
    });

//Promise.any(iterable)
//Returns a new promise tht resolves as soon as one of the promises in the iterable resolves
//If all promises reject the returned Promise is rejected with an AggregateError
//containing all the rejection reasons
let p11 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 1 resolved')
    }, 1000)
  });
  let p12 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise 2 rejected'))
    }, 2000)
  });
  let p13 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 3 resolved')
    }, 500)
  });
  Promise.any([p11, p12, p13])
    .then(values => {
      console.log(values); // "Promise 3 resolved"
    })
    .catch(error => {
      console.log(error.message); // "Promise 2 rejected"
    });

//Promise.resolve(value)
//Returns a new Promise object that is resolved with the given value
let p14 = Promise.resolve('Promise 14 resolved') 
resolve.then(value => {
  console.log(value); // "Promise 14 resolved"
});

//Promise.reject(reason)
//Returns a new Promise object that is rejected with the given reason
let p15 = Promise.reject(new Error('Promise 15 rejected'))
error.catch(error => {
  console.log(error.message); // "Promise 15 rejected"
})


