// Given the array let numbers = [1, 2, 3, 4, 5];, write JavaScript code to:

// Remove the last element
// Add 10 at the beginning
// Double each remaining element

let numbers = [1, 2, 3, 4, 5];

numbers.pop();

numbers.shift(10);

let numbersDouble = numbers.map((num) => num * 2);

console.log(numbersDouble);
