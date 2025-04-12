
/*
try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
}
*/

try {
    let lastName = 'Alvarez'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.error(err) // we can use console.log() or console.error()
  } finally {
    console.log('In any case I will be executed')
  }

  //ReferenceError: fistName is not defined
  //at <anonymous>:4:20
  //In any case it  will be executed

/*
The catch block take a parameter. 
It is common to pass e, err or error as a parameter to the catch block. 
This parameter is an object and it has name and message keys.
*/
try {
    let lastName = 'Alvarez'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.log('Name of the error: ', err.name)
    console.log('Error message: ', err.message)
  } finally {
    console.log('In any case I will be executed')
  }

/*
the throw statement allows us to create a custom error. 
We can through a string, number, boolean or an object. 
Use the throw statement to throw an exception. 
When you throw an exception, expression specifies the value of the exception.

throw 'Error2' // generates an exception with a string value
throw 42 // generates an exception with the value 42
throw true // generates an exception with the value true
throw new Error('Required') // generates an error object with the message of Required
*/

const throwErrorExampleFun = () => {
    let message
    let x = prompt('Enter a number: ') //prompt can not be used with nodejs; should it be from the browser
    try {
      if (x == '') throw 'empty'
      if (isNaN(x)) throw 'not a number'
      x = Number(x)
      if (x < 5) throw 'too low'
      if (x > 10) throw 'too high'
    } catch (err) {
      console.log(err)
    }
  }
  throwErrorExampleFun()

// ERROR TYPES
/*
//ReferenceError: An illegal reference has occurred. 
//A ReferenceError is thrown if we use a variable that has not been declared

//SyntaxError: A syntax error has occurred
let square = 2 x 2
console.log(square)
console.log('Hello, world")
//Uncaught SyntaxError: Unexpected identifier

//TypeError: A type error has occurred
let num2 = 10
console.log(num2.toLowerCase())
//Uncaught TypeError: num.toLowerCase is not a function

*/

//Custom Error Class
class DeploymentError extends Error {
    constructor(message, code) {
      super(message)
      this.name = 'DeploymentError';
      this.code = code;
    }
  }

function deployService(service) {
    if (!service) {
      throw new DeploymentError('Service name is required', 400);
    }
    // Simulate deployment logic
    console.log(`Deploying service: ${service}`);
  }
  try {
    deployService();
  } catch (error) {
    if (error instanceof DeploymentError) {
      console.error(`Deployment failed: ${error.message} (Code: ${error.code})`);
    } else {
      console.error('An unexpected error occurred:', error);
    }
  }
//Deployment failed: Service name is required (Code: 400)

//Handling API Errors with Try-Catch in Async/Await
async function fetchDeployment(){
    try{
        const response = await fetch('https://api.example.com/deployments');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        console.log("Failed to fetch deployment status: ", data.status);
        if (data.status === 'failed') {
            throw new Error('Deployment failed');
        }
        console.log('Deployment successful:', data);
    }
    catch (error) {
        console.error('Error fetching deployment data:', error);
    }
    finally {
        console.log('Fetch attempt completed.');
    }
}