//merge two arrays and remove duplicates
const mergeArrays = (arr1, arr2) => [...new Set([...arr1, ...arr2])];
console.log(mergeArrays([1, 2, 3], [3, 4, 5]));
//output: [1, 2, 3, 4, 5]

//Generate an array of numbers from 1 to n
const generateArray = (n) => [...Array(n).keys()].map(i => i + 1);
console.log(generateArray(10));
//output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Generate an array of numbers from 1 to n
const generateArray2 = (n) => Array.from({length: n}, (_, i) => i + 1);
console.log(generateArray2(10));
//output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Shuffle an array
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//output: [8, 3, 1, 6, 9, 5, 7, 2, 4, 10]

//Find the maximum value in an array
const maxArray = (arr) => Math.max(...arr);
console.log(maxArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//output: 10

//Find the minimum value in an array
const minArray = (arr) => Math.min(...arr);
console.log(minArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//output: 1

//Get the current data in the format "YYYY-MM-DD"
const currentDate = (date = new Date()) => date.toISOString().split('T')[0];
console.log(currentDate());
//output: 2021-01-01

//Get the current time in the format "HH:MM:SS"
const currentTime = (date = new Date()) => date.toTimeString().split(' ')[0];
console.log(currentTime());
//output: 12:00:00

//Get the current day of the week
const currentDay = (date = new Date()) => date.getDay();
console.log(currentDay());
//output: 1

//Get the current month
const currentMonth = (date = new Date()) => date.getMonth();
console.log(currentMonth());
//output: 0

//Check if an object is empty
const isEmpty = (obj) => Object.keys(obj).length === 0;
console.log(isEmpty({}));
//output: true

//Check if an object is not empty
const isNotEmpty = (obj) => Object.keys(obj).length !== 0;
console.log(isNotEmpty({}));
//output: false

//Group an array of objects by a specific property
const groupBy = (arr, prop) => arr.reduce((acc, cur) => {
    acc[cur[prop]] = [...acc[cur[prop]] || [], cur];
    return acc;
}, {});
console.log(groupBy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (i) => i % 2));
//output: {0: [2, 4, 6, 8, 10], 1: [1, 3, 5, 7, 9]}

//Remove duplicates from an array
const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Check if all elements in an array satisfy a condition
const allElementsSatisfy = (arr, condition) => arr.every(condition);
console.log(allElementsSatisfy([2,4,6,8,10], (i) => i%2 === 0));
//output: true

//Check if at least one element in an array satisfies a condition
const atLeastOneElementSatisfies = (arr, condition) => arr.some(condition);

//Generate a range of numbers from start to end with a step
const range = (start, end, step = 1) => Array.from({length: (end - start) / step + 1}, (_, i) => start + (i * step));
console.log(range(1, 10, 2));
//output: [1, 3, 5, 7, 9]

//Get the intersection of two arrays
const intersection = (arr1, arr2) => arr1.filter((i) => arr2.includes(i));
console.log(intersection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 4, 6, 8, 10]));
//output: [2, 4, 6, 8, 10]

//Get the difference between two arrays
const difference = (arr1, arr2) => arr1.filter((i) => !arr2.includes(i));
console.log(difference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 4, 6, 8, 10]));
//output: [1, 3, 5, 7, 9]

//Get the union of two arrays
const union = (arr1, arr2) => [...new Set([...arr1, ...arr2])];
console.log(union([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 4, 6, 8, 10]));
//output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Find the average of an array of numbers
const average = (arr) => arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//output: 5.5

//Deep clone an object
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
console.log(deepClone({a: 1, b: 2, c: 3}));
//output: {a: 1, b: 2, c: 3}

//Deep clone an array
const deepCloneArray = (arr) => JSON.parse(JSON.stringify(arr));
console.log(deepCloneArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



