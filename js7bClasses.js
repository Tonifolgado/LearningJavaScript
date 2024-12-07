
/*
The `constructor` method is a special function that gets called when an instance of the class is created. 
It’s used to initialize the object’s properties, making it an essential part of the object creation process.
*/

class Book {
    constructor(title, author) {
    this.title = title;
    this.author = author;
    }
    getSummary() {
    return `${this.title} by ${this.author}`;
    }
    }
    const book1 = new Book('1984', 'George Orwell');
    console.log(book1.getSummary()); // Output: 1984 by George Orwell

//The `extends` keyword is used to create a subclass that inherits from a parent class, 
//while also allowing you to override or add new functionality.
class Magazine extends Book {
    constructor(title, author, month) {
    super(title, author);
    this.month = month;
    }
    getSummary() {
    return `${this.title} by ${this.author} in ${this.month}`;
    }
 }
const mag1 = new Magazine('National Geographic', 'Various', 'July');
console.log(mag1.getSummary());

//PRIVATE PROPERTIES
//By prefixing a property with `#`, you make it private, 
//meaning it cannot be accessed or modified outside of the class.
//Use private properties when you need to protect the internal state of an object.
class BankAccount {
    #balance;
    constructor(initialBalance) {
    this.#balance = initialBalance;
    }
    deposit(amount) {
    this.#balance += amount;
    }
    getBalance() {
    return this.#balance;
    }
    }
    const account = new BankAccount(1000);
    account.deposit(500);
    console.log(account.getBalance()); // Output: 1500
    // console.log(account.#balance); // Error: Private field '#balance' must be declared in an enclosing class

//PUBLIC CLASS FIELDS
//Public class fields allow you to define properties directly on the class itself, outside the constructor. 
//These fields are initialized when the class is instantiated and are accessible from both inside and outside the class
//Use public class fields when you want to set default values for properties 
//or when you don't need to process values in a constructor
class User {
    name = 'Anonymous';
    age = 25;
    getUserInfo() {
    return `${this.name}, Age: ${this.age}`;
    }
    }
    const user = new User();
    console.log(user.getUserInfo()); // Output: Anonymous, Age: 25
    user.name = 'John Doe';
    console.log(user.getUserInfo()); // Output: John Doe, Age: 25

//Static Methods and Properties
//Static methods and properties are tied to the class itself, rather than to instances of the class. 
//This means they can be called on the class directly without needing to create an instance
class MathUtility {
    static PI = 3.14159;
    static circleArea(radius) {
    return this.PI * radius * radius;
    }
    }
    console.log(MathUtility.PI); // Output: 3.14159
    console.log(MathUtility.circleArea(5)); // Output: 78.53975

//Static Initialization Block
//A static initialization block allows for complex initialization of static properties. 
//This block is executed once when the class is first accessed, 
//making it a powerful tool for setting up static properties that require some logic
class Config {
    static settings;
    static {
    this.settings = {
    apiEndpoint: 'https://api.example.com',
    timeout: 5000,
    };
    }
    static getSettings() {
    return this.settings;
    }
    }
    console.log(Config.getSettings());
    // Output: { apiEndpoint: 'https://api.example.com', timeout: 5000 }
