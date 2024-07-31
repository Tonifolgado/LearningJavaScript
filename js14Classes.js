
/*
Everything in JavScript is an object, with its properties and methods. 
We create class to create an object. 
A Class is like an object constructor, or a "blueprint" for creating objects. 
We instantiate a class to create an object. 
The class defines attributes and the behavior of the object, while the object, on the other hand, represents the class
*/

//nstantiation class means creating an object from a class. 
//We need the keyword new and we call the name of the class after the word new.
class Person {
    // code goes here
  }
  const person = new Person()
  console.log(person)
  //Person {}

/*
The constructor is a builtin function which allows as to create a blueprint for our object. 
The constructor function starts with a keyword constructor followed by a parenthesis. 
Inside the parenthesis we pass the properties of the object as parameter. 
We use the this keyword to attach the constructor parameters with the class.
*/
class Person {
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  
const persona = new Person()
console.log(person)
//Person {firstName: undefined, lastName:undefined}

const person1 = new Person('Alvarez', 'Antonio')

console.log(person1)
//Person {firstName: "Antonio", lastName: "Alvarez"}

const person2 = new Person('Lidiya', 'Tekle')
const person3 = new Person('Abraham', 'Yetayeh')

console.log(person2)
console.log(person3)
//Person {firstName: "Lidiya", lastName: "Tekle"}
//Person {firstName: "Abraham", lastName: "Yetayeh"}

class Person {
    constructor(firstName, lastName, age, country, city) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
  }
  
  const personA = new Person('Antonio', 'Alvarez', 250, 'Finland', 'Helsinki')
  console.log(personA)
//Person {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki"}

//Default values in the constructor
class Person {
    constructor(
      firstName = 'Antonio',
      lastName = 'Alvarez',
      age = 58,
      country = 'Finland',
      city = 'Helsinki'
    ) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
  }
  
  const personB = new Person() // it will take the default values
  const personC = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  console.log(personB)
  console.log(personC)

//Person {firstName: "Antonio", lastName: "Alvarez", age: 58, country: "Finland", city: "Helsinki"}
//Person {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Espoo"}

// CLASS METHODS
class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
  }
  
  const person11 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
  const person12 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
  console.log(person11.getFullName())
  console.log(person12.getFullName())
//Asabeneh Yetayeh
//Lidiya Tekle

//Properties with initial value
class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
  }
  
  const person111 = new Person('Antonio', 'Alvarez', 58, 'Finland', 'Helsinki')
  const person222 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
  console.log(person111.score)
  console.log(person222.score)
  
  console.log(person111.skills)
  console.log(person222.skills)

/*
0
0
[]
[]
*/

// GETTER
//The get method allow us to access value from the object. 
//We write a get method using keyword get followed by a function. 
//Instead of accessing properties directly from the object we use getter to get the value.
class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
  }
  
  const person1C = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
  const person2C = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
  console.log(person1C.getScore) // We do not need parenthesis to call a getter method
  console.log(person2C.getScore)
  console.log(person1C.getSkills)
  console.log(person2C.getSkills)

//SETTER
//The setter method allow us to modify the value of certain properties.
class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
    }
    set setSkill(skill) {
      this.skills.push(skill)
    }
  }
  
  const person1D = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
  const person2D = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
  person1D.setScore = 1
  person1D.setSkill = 'HTML'
  person1D.setSkill = 'CSS'
  person1D.setSkill = 'JavaScript'
  
  person2D.setScore = 1
  person2D.setSkill = 'Planning'
  person2D.setSkill = 'Managing'
  person2D.setSkill = 'Organizing'
  
  console.log(person1D.score)
  console.log(person2D.score)
  
  console.log(person1D.skills)
  console.log(person2D.skills)

  /*
  1
1
["HTML", "CSS", "JavaScript"]
["Planning", "Managing", "Organizing"]
  */

class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
    }
    set setSkill(skill) {
      this.skills.push(skill)
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
          ` and ${this.skills[this.skills.length - 1]}`
      let formattedSkills = skills ? `He knows ${skills}` : ''
  
      let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
      return info
    }
  }
  
  const person1E = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
  const person2E = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  const person3E = new Person('John', 'Doe', 50, 'Mars', 'Mars city')
  
  person1.setScore = 1
  person1.setSkill = 'HTML'
  person1.setSkill = 'CSS'
  person1.setSkill = 'JavaScript'
  
  person2.setScore = 1
  person2.setSkill = 'Planning'
  person2.setSkill = 'Managing'
  person2.setSkill = 'Organizing'
  
  console.log(person1E.getScore)
  console.log(person2E.getScore)
  
  console.log(person1E.getSkills)
  console.log(person2E.getSkills)
  console.log(person3E.getSkills)
  
  console.log(person1E.getPersonInfo())
  console.log(person2E.getPersonInfo())
  console.log(person3E.getPersonInfo())

  /*
  1
1
["HTML", "CSS", "JavaScript"]
["Planning", "Managing", "Organizing"]
[]
Asabeneh Yetayeh is 250. He lives Helsinki, Finland. He knows HTML, CSS and JavaScript
Lidiya Tekle is 28. He lives Espoo, Finland. He knows Planning, Managing and Organizing
John Doe is 50. He lives Mars city, Mars.
  */

//Static method
//Static methods are not called on instances of the class. 
//Instead, they are called on the class itself. 
//These are often utility functions, such as functions to create or clone objects.
class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
    }
    set setSkill(skill) {
      this.skills.push(skill)
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
          ` and ${this.skills[this.skills.length - 1]}`
  
      let formattedSkills = skills ? `He knows ${skills}` : ''
  
      let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
      return info
    }
    static favoriteSkill() {
      const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
      const index = Math.floor(Math.random() * skills.length)
      return skills[index]
    }
    static showDateTime() {
      let now = new Date()
      let year = now.getFullYear()
      let month = now.getMonth() + 1
      let date = now.getDate()
      let hours = now.getHours()
      let minutes = now.getMinutes()
      if (hours < 10) {
        hours = '0' + hours
      }
      if (minutes < 10) {
        minutes = '0' + minutes
      }
  
      let dateMonthYear = date + '.' + month + '.' + year
      let time = hours + ':' + minutes
      let fullTime = dateMonthYear + ' ' + time
      return fullTime
    }
  }
  
  console.log(Person.favoriteSkill())
  console.log(Person.showDateTime())
//Node
//15.1.2020 23:56

//INHERITANCE
class Student extends Person {
    saySomething() {
      console.log('I am a child of the person class')
    }
  }
  
  const s1 = new Student('Fernando', 'Yetayeh', 'Finland', 35, 'Helsinki')
  console.log(s1)
  console.log(s1.saySomething())
  console.log(s1.getFullName())
  console.log(s1.getPersonInfo())

//Student {firstName: "Fernando", lastName: "Yetayeh", age: "Finland", country: 250, city: "Helsinki", …}
//I am a child of the person class
//Fernando Yetayeh
//Student {firstName: "Fernando", lastName: "Yetayeh", age: "Finland", country: 250, city: "Helsinki", …}
//(Fernando Yetayeh is Finland. He lives Helsinki, 35.

//Overriding methods

class Student extends Person {
    constructor(firstName, lastName, age, country, city, gender) {
      super(firstName, lastName, age, country, city)
      this.gender = gender
    }
    saySomething() {
      console.log('I am a child of the person class')
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
          ` and ${this.skills[this.skills.length - 1]}`
  
      let formattedSkills = skills ? `He knows ${skills}` : ''
      let pronoun = this.gender == 'Male' ? 'He' : 'She'
  
      let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
      return info
    }
  }
  
  const s1B = new Student(
    'Asabeneh',
    'Yetayeh',
    250,
    'Finland',
    'Helsinki',
    'Male'
  )
  const s2B = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
  s1.setScore = 1
  s1.setSkill = 'HTML'
  s1.setSkill = 'CSS'
  s1.setSkill = 'JavaScript'
  
  s2.setScore = 1
  s2.setSkill = 'Planning'
  s2.setSkill = 'Managing'
  s2.setSkill = 'Organizing'
  
  console.log(s1B)
  
  console.log(s1B.saySomething())
  console.log(s1B.getFullName())
  console.log(s1B.getPersonInfo())
  
  console.log(s2B.saySomething())
  console.log(s2B.getFullName())
  console.log(s2B.getPersonInfo())

  