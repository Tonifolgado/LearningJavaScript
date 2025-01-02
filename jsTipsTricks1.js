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
