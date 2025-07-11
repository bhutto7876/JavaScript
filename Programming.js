const name = "Ali";
// const greeting = `Hello, ${name}!`;   

const greeting = "Hello " + name;   // Backticks instead of quotes

const poem = `
Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you.`;
// console.log(poem);

let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total)

const numbers = [23, 55, 21, 87, 56];
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);

// console.log(`min, ${minValue} 
// and max Value , ${maxValue}`)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

// console.log(`Join Arrays, ${arr3}`)

// const q1 = [{name:"nisar", age:27, designation:"Senior SWE"}];
// const q2 = [{name:"sohail", age:29, designation:" SWE"}];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];


// const q1 = {name:"nisar", age:27, designation:"Senior SWE"};
// const q2 = {name:"sohail", age:29, designation:" SWE"};
// const year = {...q1, ...q2};

const user = { name: "Ali", age: 25 };

const job = { position: "Developer" };
const employee = { position: "Developer", ...user };

// console.log(JSON.stringify(employee));
// console.log((employee));

const fruits = ["apple", "banana", "mango"];

// console.log(`Array of fruits, ${JSON.stringify(fruits)}`)
// If you use an object inside a template literal, it will be converted to "[object Object]".
// To see the object's properties, use JSON.stringify:
// console.log(`Employee details: ${JSON.stringify(employee)}`)


const nums = [ 2, 3];
function sum(a, b, c) {
  return a + b + c;
}console.log(sum(1,...nums)); 


const word = "hello";
const letters = ["d",...word, "d"];

// console.log(letters);
function sum(...numbers) {
  return numbers.reduce((a, b) => a * b);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
