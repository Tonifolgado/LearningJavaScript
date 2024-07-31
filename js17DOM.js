/*
Document Object Model (DOM)
HTML document is structured as a JavaScript Object. 
Every HTML element has a different properties which can help to manipulate it. 
It is possible to get, create, append or remove HTML elements using JavaScript. 
Selecting HTML element using JavaScript is similar to selecting using CSS. 
To select an HTML element, we use tag name, id, class name or other attributes.
*/
<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Document Object Model</title>
    </head>
    <body>

     <h1 class='title' id='first-title'>First Title</h1>
     <h1 class='title' id='second-title'>Second Title</h1>
     <h1 class='title' id='third-title'>Third Title</h1>
     <h1></h1>

    </body>
  </html>

const allTitles = document.getElementsByTagName('h1')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}

const allTitles2 = document.getElementsByClassName('title')

console.log(allTitles2) //HTMLCollections
console.log(allTitles2.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}

let firstTitle = document.getElementById('first-title')
console.log(firstTitle) // <h1>First Title</h1>

//querySelector: can be used to select HTML element by its tag name, id or class. 
//If the tag name is used it selects only the first element.
let firstTitle1 = document.querySelector('h1') // select the first available h1 element
let firstTitle2 = document.querySelector('#first-title') // select id with first-title
let firstTitle3 = document.querySelector('.title') // select the first available element with class title

//querySelectorAll: can be used to select html elements by its tag name or class. 
//It returns a nodeList which is an array like object which supports array methods. 
//We can use for loop or forEach to loop through each nodeList elements.
const allTitles3 = document.querySelectorAll('h1') // selects all the available h1 elements in the page

console.log(allTitles3.length) // 4
for (let i = 0; i < allTitles3.length; i++) {
  console.log(allTitles3[i])
}

allTitles3.forEach(title => console.log(title))
const allTitles4 = document.querySelectorAll('.title') // the same goes for selecting using class

//An attribute is added in the opening tag of HTML which gives additional information about the element. 
//Common HTML attributes: id, class, src, style, href,disabled, title, alt.
const titles = document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'

//The setAttribute() method set any html attribute. 
//It takes two parameters the type of the attribute and the name of the attribute
const titles = document.querySelectorAll('h1')
titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id', 'fourth-title')

//The class list method is a good method to append additional class. 
//It does not override the original class if a class exists rather it adds additional class for the element.
titles[3].classList.add('title', 'header-title')
//Similar to adding we can also remove class from an element.
titles[3].classList.remove('title', 'header-title')

//An HTML is a build block of an opening tag, a closing tag and a text content. 
//We can add a text content using the property textContent or *innerHTML.
const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title'

//We use innerHTML property when we like to replace or a completely new children content to a parent element. 
//It value we assign is going to be a string of HTML elements.
//The innerHTML property can allow us also to remove all the children of a parent element. Instead of using removeChild()

//ADDING STYLE
const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = 'green'
  } else {
    title.style.color = 'red'
  }
})

const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.backgroundColor = 'green'
  } else {
    title.style.backgroundColor = 'red'
  }
})

const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.fontSize = '20px'
  } else {
    title.style.fontSize = '30px'
  }
})




