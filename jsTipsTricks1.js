//location.reload()
//Reloads the current document and works same as the reload button of the browser
const btnRefresh = document.querySelector('button')
btnRefresh.addEventListener('click', () => {
    location.reload()
})

//Active Element
//to know which element is currently focused
console.log(document.activeElement)

//Replace method
//allows to replace the very first instance of a string entity with the specified entity
//We also have replaceAll() that replaces all the instances
const str = 'Hello, how are you?'
const newStr = str.replace('Hello', 'Hi')
console.log(newStr)
//Hi, how are you?
//replace() method is case sensitive

//Includes method
//allows to check if a string includes a substring
const str2 = 'Hello, how are you?'
console.log(str2.includes('how')) //true
console.log(str2.includes('How')) //false

//Remove false values from an array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, false, null, undefined, '', 0, NaN]
const newArr = arr.filter(Boolean); 
//filter() method creates a new array with all elements 
//that pass the test implemented by the provided function
console.log(newArr)
//output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Getting unique values from Array
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const uniqueArr = [...new Set(arr2)]
console.log(uniqueArr)
//output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Optional chaining
//Allows you to read a property from an object without checking if object exists
//To get deeply nested properties from object without checking validity of each step in the chain
user.data?.id;
user.data?.name;
user.data?.address?.city;
user.data?.address?.country;
//? says to javascript that if the property exists, then go ahead and read it, otherwise return undefined
//If it is not null try to fetch the value beyond ?, else just stop here
//Just put it when you are not sure whether property exist or not


//USEFUL SHORTCUTS
//1. Ternary operator
const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
console.log(isAdult)

//2. Default parameters
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
  }

//3. Arrow functions
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

//4. Destructuring objects
const {nombre, edad} = person;
console.log(nombre, edad); // Antonio 250

//5. Destructuring  arrays
const [first, second] = ['apple', 'banana'];
console.log(first, second); // apple banana

//6. Template literals
const message = `Hello, ${nombre}! You are ${edad} years old.`;
console.log(message); // Hello, Antonio! You are 250 years old.

//7. Spread operator
const numericos = [1, 2, 3];
const newNumbers = [...numericos, 4, 5];
console.log(newNumbers); // [1, 2, 3, 4, 5]

//8. Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
console.log(sum(1, 2, 3, 4, 5)); // 15

//9. Optional chaining
const street = user?.address?.street;
console.log(street);
// undefined (if address is not defined)

//10. Nullish coalescing operator
const value = null ?? 'default value';
console.log(value); // 'default value' (if value is null or undefined)

//11. Short-circuit evaluation
const status = isLoggedIn && "Welcome!";
console.log(status); // "Welcome!" (if isLoggedIn is true)

//12. Logical OR assignment
user.name ||= 'Guest';
console.log(user.name); // 'Guest' (if user.name is falsy)

//13. Logical AND assignment
settings.debug &&= false;
console.log(settings.debug); // false (if settings.debug is truthy)

//14. Object property shorthand
const edad2 = 25;
const person2 = { nombre, edad2 };
console.log(person2); // { nombre: 'Antonio', edad2: 25 }

//15. Computed property names
const key = "level";
const player = { [key]: 100 };
console.log(player); // { level: 100 }

//16. For-of loop
for (const skill of skills) {
    console.log(skill);
  }
//HTML
//CSS
//JavaScript
//React
//Redux
//Node
//MongoDB
//Python
//D3.js

//17.foreach loop
items.forEach( item => {
    console.log(item)
  })
//HTML
//CSS
//JavaScript
//React
//Redux
//...

//18. Map function
const squared = nums.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25]

//19. Filter function
const evens2 = nums.filter(num => num % 2 === 0);
console.log(evens2); // [2, 4]

//20. Reduce function
const sum = nums.reduce((total, num) => total + num, 0);
console.log(sum); // 55

//21. Includes check
const found = todoList.includes('Learn JavaScript');
console.log(found); // true

//22. Set for uniques values
const unique = [...new Set([1, 2, 3, 1, 2])];
console.log(unique); // [1, 2, 3]

//23. Object entries
Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  }
//);
// name: Antonio
// age: 250
// country: Finland
// job: Instructor and Developer
// skills: HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python, D3.js
// languages: Amharic, English, Suomi(Finnish)

//24. Object values
const vals = Object.values(obj);
console.log(vals);
// [ 'Antonio', 250, 'Finland', 'Instructor and Developer',
  //...

//25. Object keys
const keys = Object.keys(obj);
console.log(keys);
// [ 'name', 'age', 'country', 'job', 'skills', 'languages' ]

//26. Chaining array methods
const result = DataTransfer.filter(a=> a.active).map(a=>a.name);
console.log(result);
// ['Antonio', 'Brook', 'David', 'John']
// ['Asabeneh', 'Brook', 'David', 'John']

//27. Trim string
const cleaned = str.trim();
console.log(cleaned); // 'Hello, how are you?'

//28. Pad string
const padded = str.padStart(20, ' ');
console.log(padded); // '     Hello, how are you?'
const padded2 = "5".padStart(2, '0');
console.log(padded2); // '05'

//29. Intl.NumberFormat
const price = new Intl.NumberFormat().format(1234567.89);
console.log(price); // '1,234,567.89'

//30. Dynamic import
const module = await import('./module.js');
console.log(module);

//31. Promise.all
await Promise.all([fetch(url1), fetch(url2)])
  .then(responses => {
    // Handle responses
  })
  .catch(error => {
    console.error('Error:', error);
  });

await Promise.all([fetchData(), loadUI()])
  .then(([data, ui]) => {
    // Handle data and UI
  })
  .catch(error => {
    console.error('Error:', error);
  });

//32. async/await
const fetchData = async () => {
  const res = await fetch(url);
  return res.json();
};

//33. Optional parameters in functions
function log (message, level = 'info') {
    console[level](message);
  }
log('This is an info message'); // info
log('This is an error message', 'error'); // error

//Number and boolean conversion witn Unary and !!
const num = +"42";
const bool = !!"Hello";
console.log(num); // 42
console.log(bool); // true

//35. Quick string to array
const chars = [...'Hello'];
console.log(chars); // ['H', 'e', 'l', 'l', 'o']

//36. Quick object clone
const cpy = {...person};
console.log(cpy);
// { name: 'Antonio', age: 250, country: 'Finland', job: 'Instructor and Developer',
//   skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'D3.js'],
//   languages: ['Amharic', 'English', 'Suomi(Finnish)'] }

