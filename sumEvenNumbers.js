// Write a function called sumEvenNumbers that takes an array of numbers and returns the sum of all the even numbers in the array.

// Example:

// javascript
// Copy
// Edit

function sumEvenNumbers(numbers) {
    let sum = 0;  // Initialize the sum variable
  
    // Loop through the array
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {  // Check if the number is even
        sum += numbers[i];  // Add the even number to the sum
      }
    }
  
    return sum;  // Return the sum of even numbers
  }
  
  console.log(sumEvenNumbers([1, 2, 3, 4, 5]));  // Output: 6 (2 + 4)
  