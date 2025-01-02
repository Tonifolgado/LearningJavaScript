//Deep clone object
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

//Random number generator
function getRandomNumber(min,max) {
  return Math.floow(Math.random() * (max - min + 1) + min);
}

//Check if array is empty
const isEmptyArray = (arr) => Array.isArray(arr) && arr.length === 0;

//Unique array elements
const uniqueElements = (arr) => [...new Set(arr)];

//Get URL parameters
const getUrlParams = () => Object.fromEntries(new URLSearchParams(window.location.search));

//Capitalize first letter of each word
const capitalize = (str) => str.replace(/\b[a-z]/g, char => char.toUpperCase());

//Check if object is empty
const isEmptyObject = (obj) => Object.keys(obj).length === 0;

//Fetch data from an API
const fetchData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

//Convert string to title case
const toTitleCase = (str) => str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase());

//Get current date and time
const getCurrentDateTime = () => new Date().toLocaleString();

//Check if a number is even or odd
const isEven = (num) => num % 2 === 0;

//Find the maximum number in an array
const maxNumber = (arr) => Math.max(...arr);

//Sort an array of numbers in ascending order
const sortNumbers = (arr) => arr.sort((a, b) => a - b);

//Fltten nested arrays
const flattenArray = (arr) => arr.flat(Infinity);

//Reverse a string
const reverseString = (str) => str.split('').reverse().join('');

//Shufle an array
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

//Merge two arrays
const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];

