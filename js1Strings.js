// STRINGS
let space = ' '           // an empty space string
let country = 'Finland'
let city = 'Helsinki'
let job = 'teacher'
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let language = 'Spanish'
let age = 25
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);

let fullName2 =firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition
console.log(personInfoOne)

// Escape sequences
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises') // tabulation, 8 spaces
console.log('Day 1\t3\t5')//tabulation 3 and 5 spaces
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

//Template strings
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)

let c = 2
let d = 3
console.log(`${c} is greater than ${d}: ${c > d}`)

//String methods
//Everything in JavaScript is an object. 
//A string is a primitive data type that means we can not modify it once it is created.
//But we can create a new string from an existing string using string methods.
let js = 'JavaScript'
console.log(js.length)         // 10
console.log(js.toUpperCase())  // JAVASCRIPT
console.log(js.toLowerCase())  // javascript
let firstLetter = js[0]
console.log(firstLetter)           // J
let secondLetter = js[1]       // a
let thirdLetter = js[2]        //v
let lastLetter = js[9]
console.log(lastLetter)            // t

let lastIndex = js.length - 1
console.log(lastIndex)  // 9
console.log(js[lastIndex])    // t

console.log(country.substring(3, 4))   // land
console.log(country.substring(0, 3))   // Fin
console.log(country.substring(3, 7))   // land
console.log(country.substring(3))      // land

//Split()
let string = '30 Days Of JavaScript'

console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

let nombre = 'Antonio'

console.log(firstName.split())    // Change to an array - > ["Antonio"]
console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "n", "t", "o", "n", "i", "o"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

//trim(): Removes trailing space in the beginning or the end of a string
let titulo = '   30 Days Of JavaScript   '

console.log(titulo)
console.log(titulo.trim(' '))
let apellido = ' Alvarez '
console.log(apellido)
console.log(apellido.trim())  // still removes spaces at the beginning and the end of the string

//includes() returns a boolean. 
//If a substring exist in a string, it returns true, otherwise it returns false.
let tit = '30 Days Of JavaScript'
console.log(tit.includes('Days'))     // true
console.log(tit.includes('days'))     // false - it is case sensitive!
console.log(tit.includes('Script'))   // true
console.log(tit.includes('script'))   // false
console.log(tit.includes('java'))     // false
console.log(tit.includes('Java'))     // true

//string.replace(oldsubstring, newsubstring)
let tit2 = '30 Days Of JavaScript'
console.log(tit2.replace('JavaScript', 'Python')) // 30 Days Of Python
let pais = 'Finland'
console.log(pais.replace('Fin', 'Noman'))       // Nomanland

//string.charAt(index)
console.log(tit2.charAt(0))        // 3
let lastIndex2 = tit2.length - 1
console.log(tit2.charAt(lastIndex2)) // t

//string.charCodeAt(index)
console.log(tit2.charCodeAt(3))        // D ASCII number is 68
let lastIndex3 = tit2.length - 1
console.log(tit2.charCodeAt(lastIndex3)) // t ASCII is 116

//string.indexOf(substring)
//indexOf(): Takes a substring and if the substring exists in a string 
//it returns the first position of the substring if does not exist it returns -1
console.log(tit2.indexOf('D'))          // 3
console.log(tit2.indexOf('Days'))       // 3
console.log(tit2.indexOf('days'))       // -1
console.log(tit2.indexOf('a'))          // 4
console.log(tit2.indexOf('JavaScript')) // 11
console.log(tit2.indexOf('Script'))     //15
console.log(tit2.indexOf('script'))     // -1

//lastIndexOf(): Takes a substring and if the substring exists in a string 
//it returns the last position of the substring if it does not exist it returns -1
//string.lastIndexOf(substring)
let text = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(text.lastIndexOf('love'))       // 67
console.log(text.lastIndexOf('you'))        // 63
console.log(text.lastIndexOf('JavaScript')) // 38

//string.concat(substring, substring, substring)
let txt1 = '30'
console.log(txt1.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript
let txt2 = 'Fin'
console.log(txt2.concat("land")) // Finland

//string.startsWith(substring)
let txt3 = 'Love is the best to in this world'

console.log(txt3.startsWith('Love'))   // true
console.log(txt3.startsWith('love'))   // false
console.log(txt3.startsWith('world'))  // false

console.log(country.startsWith('Fin'))   // true
console.log(country.startsWith('fin'))   // false
console.log(country.startsWith('land'))  //  false

//string.endsWith(substring)
let txt4 = 'Love is the most powerful feeling in the world'

console.log(txt4.endsWith('world'))         // true
console.log(txt4.endsWith('love'))          // false
console.log(txt4.endsWith('in the world')) // true

console.log(country.endsWith('land'))         // true
console.log(country.endsWith('fin'))          // false
console.log(country.endsWith('Fin'))          //  false

//string.search(substring)
//search: it takes a substring as an argument and it returns the index of the first match. 
//The search value can be a string or a regular expression pattern.
let txt5 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7

//match: it takes a substring or regular expression pattern as an argument 
//and it returns an array if there is match if not it returns null. 
//string.match(substring)
let string3 = 'love'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive

let txt6 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(txt6.match('love'))
// ["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
let pattern = /love/gi
console.log(txt6.match(pattern))   // ["love", "love", "love"]


let txt7 = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt7.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt7.match(/\d+/g)) // ["2019", "30", "2020"]

//string.repeat(n)
let string4 = 'love'
console.log(string4.repeat(10)) // lovelovelovelovelovelovelovelovelovelove

// CASTING
let num = '10'
let numInt = parseInt(num)
console.log(numInt) // 10

let num2 = '10'
let numInt2 = Number(num)
console.log(numInt2) // 10

let num3 = '10'
let numInt3 = +num
console.log(numInt3) // 10

let num4 = '9.81'
let numFloat = parseFloat(num4)
console.log(numFloat) // 9.81

let num5 = '9.81'
let numFloat1 = Number(num)
console.log(numFloat1) // 9.81

let num6 = 9.81
let numInt4 = parseInt(num6)
console.log(numInt4) // 9



