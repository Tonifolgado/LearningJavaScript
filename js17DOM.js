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

//getElementById() method returns the element that has the ID attribute with the specified value
let firstTitle = document.getElementById('first-title')
console.log(firstTitle) // <h1>First Title</h1>

//getElementByClassName() method returns a collection of all the elements in the document with the specified class name
document.getElementsByClassName('title');

//getElementsByName() method returns a collection of all elements in the document with the specified name
var x = document.getElementsByName("x");

//getElementsByTagName() method returns a collection of all elements in the document with the specified tag name
var x = document.getElementsByTagName("p");

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

//adoptNode() adopts a node from a different document to this document.

//anchors : returns a collection of all the anchor elements in the document.
var x = document.anchors;// anchors is deprecated


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

//createAttribute() creates a new attribute.
var h1 = document.getElementsByTagName("H1");
var att = document.createAttribute("class");
att.value = "openclass";
h1[0].setAttributeNode(att);


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

//baseURI returns the base URI of the HTML document.
var x = document.baseURI;
//output
// https://www.w3schools.com/

//body returns the body element of the HTML document.
var x = document.body;
document.body.style.backgroundColor = "red";

//close() closes the document and releases all resources.
document.open();
document.write("Hello World");
document.close();
//displays the collected data in this process

//cookie returns a string containing all the cookies associated with the document.
var x = document.cookie;
//returns all name/value pairs of cookies in the current document

//characterSet returns the character set used by the document.
var x = document.characterSet;
//UTF-8

//createComment() creates a new HTML comment node
var c = document.createComment("Hello World");
document.body.appendChild(c);

//createDocumentFragment() creates an imaginary Node object
//with all the properties and methods of the Node object.
var d = document.createDocumentFragment();
document.body.appendChild(d);
//returns an empty document fragment

//createElement() creates a new element node
var btn = document.createElement("BUTTON");
btn.innerHTML = "CLICK ME";
document.body.appendChild(btn);

//createEvent() creates a new Event object
var evt = document.createEvent("MouseEvent");
evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
document.getElementById("myDIV").dispatchEvent(evt);

//createTextNode() creates a new Text node
var t = document.createTextNode("Hello World");
document.body.appendChild(t);

//defaultView returns the window object of the document.
var x = document.defaultView;
//window object

//designMode returns a boolean indicating whether the document is in design mode or not.
document.designMode = "on";

//documentElement returns the document element of the document.
var x = document.documentElement.nodeName;
console.log(x);
//output HTML

//documentURI returns the URI of the document.
var x = document.documentURI;
console.log(x);
//output https://...

//domain returns the domain of the document.
var x = document.domain; //domain is deprecated
console.log(x);
// output example.com

//embeds returns a collection of all the embed elements in the document.
var x = document.embeds.length;
console.log(x);
//output 0

//execCommand() executes a command on the current selection.
document.execCommand("bold", false, null);

//forms returns a collection of all the form elements in the document.
var x = document.forms.length;
console.log(x);
//output 1

//fullscreenElement returns the element that is in full screen mode.
var x = document.fullscreenElement;

//fullscreenEnabled returns a boolean indicating whether the document is in full screen mode or not.
var x = document.fullscreenEnabled;

//hasFocus() returns a boolean indicating whether the document has focus or not.
var x = document.hasFocus();

//head returns the head element of the document.
var x = document.head.nodeName;
console.log(x);
//output HEAD

//lastModified returns the date and time the document was last modified.
var x = document.lastModified;
console.log(x);
//output 2023-02-20T14:30:00.000Z

//links collection that returns a collection of ll links in the document
var x = document.links.length;
console.log(x);
//output 0

//normalize() normalizes the document. Removes empty text nodes, and joins adjacent Text nodes
document.normalize();
//normalize() is not supported in most browsers

//normalizeDocument() normalizes the document. Removes empty text nodes, and joins adjacent Text nodes
document.normalizeDocument();
//normalizeDocument() is not supported in most browsers

//open() opens a new browser window.
document.open();
//open() is not supported in most browsers

//readyState returns the loading state of the document.
var x = document.readyState;
console.log(x);
//output loading

//referrer returns the URL of the previous page.
var x = document.referrer;
console.log(x);
// output https://...

//removeEventListener() removes an event listener from the specified element.
document.removeEventListener("click", myFunction);
//removeEventListener() is not supported in most browsers

//scripts returns a collection of all the script elements in the document.
var x = document.scripts.length;
console.log(x);

//title returns the title of the document.
var x = document.title;
console.log(x);
//output My Document

//URL returns the URL of the document.
var x = document.URL;

//write() writes HTML expressions or JavaScript code to a document.
document.write("Hello World");
//write() is not supported in most browsers

//writeIn() writes HTML expressions or JavaScript code to a document.
document.writeIn("Hello World");
//writeIn() is not supported in most browsers





