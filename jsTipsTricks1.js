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

