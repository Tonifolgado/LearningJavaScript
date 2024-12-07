
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}
//  3 is a positive number

let isRaining = true
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// You need a rain coat.

isRaining = false
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// No need for a rain coat.

// if else if else
let weather = 'sunny'
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}

//this to admit windows methods in the code managed with NODEJS
const prompt = require("prompt-sync")({sigint:true});
let number = prompt('Enter number: ');
switch (true) {
  case num > 0:
    console.log('Number is positive');
    break;
  case num == 0:
    console.log('Numbers is zero');
    break;
  case num < 0:
    console.log('Number is negative');
    break;
  default:
    console.log('Entered value was not a number');
}

//Ternary operator
let isRaining2 = true
isRaining2
  ? console.log('You need a rain coat.') //return if the condition is true
  : console.log('No need for a rain coat.') //return if the condition is false

//Jump/dispatch table
//Stores value-function paris in an object to quickly fetch and run a function
//based on a value (treated as an object key)
const run = () => { console.log("Run away!")}
const attack = () => { console.log("Attack!")}
const specialAttack = () => { console.log("Special Attack!")}
const handleAction = {
  "newbie": run,
  "intermediate": attack,
  "advanced": attack,
  "expert": specialAttack
}
const level = "intermediate"
handleAction[level]() // Attack!


//Dynamic Dispatch
//Executes a version of a method based on the type of the object
const handleGreet = (animal) => {
  animal.greet()
}
class Creature {
  contructor (health = 100) {
    this.health = health
  }
  greet () {
    console.log("Hello, I'm a creature")
  }
}
class Dog extends Creature {
  greet () {
    console.log("Hello, I'm a dog")
  }
}
class Cat extends Creature {
  greet () {
    console.log("Hello, I'm a cat")
  }
}

const Winston = new Dog()
handleGreet(Winston) // Hello, I'm a dog