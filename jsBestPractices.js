//Use built-in array methods like forEach(), map(), filter(), and
//reduce() to perform common array operations more efficiently.
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArray.forEach((i) => console.log(i));

//Use Promise.all with map for parallel asynchronous operations, 
//or a for...of loop for sequential processing
async function processItems(items){
    await Promise.all(items.map(async (item) => {
        await processItem(item);
    }));
    console.log('All items processed');
    //This logs after all items are processed
}

//Use async/await or properly chain promises to handle asynchronous operations.
async function getData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
