
//globalThis
//It provides a standard way to access the global scope
globalThis.globalVar = 'global variable';
console.log(globalThis.globalVar);

//matchAll()
//It returns an iterator of all results matching a string against a regular expression
const text = "apple, banana, cherry";
const regex = /[a-z]+/g;
const matches = [...text.matchAll(regex)];
matches.forEach(match => {
  console.log('Match: ${match[0]}');
});

//Error cause
//cause property allows to include the original error
//when throwing a new error, providing more context
try {
  throw new Error('Error message', { cause: 'Error cause' });
} catch (error) {
  console.log(error.message); // Error message
  console.log(error.cause); // Error cause
}

//Private methods and fields
//denoted with #, accessible only within the class
class MyClass {
  #privateField = 'private field';
  #privateMethod() {
    console.log('private method');
  }
  publicMethod() {
    console.log(this.#privateField);
    this.#privateMethod();
  }
}
const instance = new MyClass();
instance.publicMethod();
 // Output: private field
// console.log(instance.#privateField); // Error: Private field '#privateField' must be declared in an enclosing class
// console.log(instance.#privateMethod); // Error: Private field '#privateMethod' must be declared in an enclosing class

//await operator at the top level
//Top-level await allows the await keyword to be used outside of an async function
//makins asynchronous operations simpler in module scripts
const response = await fetch('https://api.example.com/data')
    .then(response => response.json())
    .catch(error => console.error(error));
console.log(data);

//Object.hasOwn()
//safer way to check if an object has a specified property
//avoiding issues with overriden hasOwnProperty
const user = { name:"Alice"};
console.log(Object.hasOwn(user, 'name'));
 // Output: true
console.log(Object.hasOwn(user, 'age'));
 // Output: false

//Native Array groupBy
//It groups the elements of an array based on the result of a function
const numbers = [1, 2, 3, 4, 5];
const grouped = numbers.groupBy(num => num % 2 === 0 ? 'even' : 'odd');
console.log(grouped); //output: 2,4

