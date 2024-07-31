/*
RegExp is a small programming language that helps to find pattern in data. 
A RegExp can be used to check if some pattern exists in a different data types. 
To use RegExp in JavaScript either we use RegExp constructor 
or we can declare a RegExp pattern using two forward slashes followed by a flag
A regular expression takes two parameters. One required search pattern and an optional flag
A pattern could be a text or any form of pattern which some sort of similarity. 
g: a global flag which means looking for a pattern in whole text
i: case insensitive flag(it searches for both lowercase and uppercase)
m: multiline
*/

// without flag
let pattern = 'love'
//let regEx = new RegExp(pattern)
let flag = 'gi'
let regEx = new RegExp(pattern, flag)

//Declaring a regex pattern using RegExp object.
let regEx2 = new RegExp('love','gi')
//Creating a pattern without RegExp Constructor
let regEx3= /love/gi
//The above regular expression is the same as the one which we created with RegExp constructor

//test():Tests for a match in a string. It returns true or false.
const str = 'I love JavaScript'
const pattern2 = /love/
const result = pattern2.test(str)
console.log(result) //true

//match():Returns an array containing all of the matches, 
//including capturing groups, or null if no match is found. 
//If we do not use a global flag, match() returns an array containing the pattern, index, input and group
const str2 = 'I love JavaScript'
const pattern3 = /love/
const result2 = str2.match(pattern3)
console.log(result2) 
//["love", index: 2, input: "I love JavaScript", groups: undefined]
const pattern4 = /love/g
const result3 = str2.match(pattern4)
console.log(result3)
//["love"]

//search(): Tests for a match in a string. 
//It returns the index of the match, or -1 if the search fails
const result4 = str2.search(pattern4)
console.log(result4)
//2

//replace(): Executes a search for a match in a string, 
//and replaces the matched substring with a replacement substring.
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'
matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)
//JavaScript is the most beautiful language that a human begin has ever created.I recommend python for a first programming language

matchReplaced = txt.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced)
//JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language

matchReplaced = txt.replace(/Python/gi, 'JavaScript')
console.log(matchReplaced)
//JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language


const txt2 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt2.replace(/%/g, '')
console.log(matches)  
//I am teacher and  I love teaching.
//There is nothing as more rewarding as educating and empowering people.
//I found teaching more interesting than any other jobs.Does this motivate you to be a teacher.

//Let's use square bracket to include lower and upper case
const patternA = '[Aa]pple' // this square bracket means either A or a
const txt3 = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt3.match(patternA)
console.log(matches)  
//["Apple", index: 0, input: "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away.", groups: undefined]

/*
const pattern = /[Aa]pple/g // this square bracket means either A or a
const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt.match(pattern)

console.log(matches)  
["Apple", "apple"]
*/

const patternB = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
//const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
const matches2 = txt3.match(patternB)

console.log(matches2)  
//["Apple", "banana", "apple", "banana", "Banana"]
//Using the square bracket and or operator , we manage to extract Apple, apple, Banana and banana.

//Escape character(\) in RegExp
const patternC = /\d/g  // d is a special character which means digits
const txt4 = 'This regular expression example was made in January 12,  2020.'
const matches3 = txt. match(patternC)
console.log(matches3)  // ["1", "2", "2", "0", "2", "0"], this is not what we want

const patternD = /\d+/g  // d is a special character which means digits
const matches4 = txt. match(patternD)
console.log(matches4)  // ["12", "2020"], this is not what we want

const patternE = /[a]./g  // this square bracket means a and . means any character except new line
const txt5 = 'Apple and banana are fruits'
const matches5 = txt5.match(patternE)
console.log(matches5)  // ["an", "an", "an", "a ", "ar"]

const patternF = /[a].*/g  // . any character, * any character one or more times 
const matches6 = txt5.match(patternF)
console.log(matches6)  // ['and banana are fruits']

const txt6 = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const patternG = /[Ee]-?mail/g  // ? means optional
const matches7 = txt6.match(patternG)
console.log(matches7)  // ["e-mail", "email", "Email", "E-mail"]

//We can specify the length of the substring we look for in a text, using a curly bracket.
const txt7 = 'This regular expression example was made in December 6,  2019.'
const patternH = /\\b\w{4}\b/g  //  exactly four character words
const matches8 = txt7.match(patternH)
console.log(matches8)  //['This', 'made', '2019']

const patternI = /\b[a-zA-Z]{4}\b/g  //  exactly four character  words without numbers
const matches9 = txt7.match(patternI)
console.log(matches9)  //['This', 'made']

const patternJ = /\d{4}/g  // a number and exactly four digits
const matches10 = txt7.match(patternJ)
console.log(matches10)  // ['2019']

const patternK = /\d{1,4}/g   // 1 to 4
const matches11 = txt7.match(patternK)
console.log(matches11)  // ['6', '2019']

const patternL = /^This/ // ^ means starts with
const matches12 = txt7.match(patternL)
console.log(matches12)  // ['This']

const patternM = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
const matches13 = txt7.match(patternM)
console.log(matches13)  // ["6", "2019"]

//Exact match:It should have ^ starting and $ which is an end
let patternN = /^[A-Z][a-z]{3,12}$/;
let nombre = 'Asabeneh';
let resultN = patternN.test(nombre)
console.log(result) // true

