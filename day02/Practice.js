// Create an array of string and add  10 students names
let students = ["Sandy", "Peter", "Mary", "John", "Sarah", "David", "Emily","Jessica", "Michael", "Laura"];

// Print the original array
console.log("Original Array: ", students);

// Use the push() method to add 1 more students to the array
students.push("Olivia");

console.log(students);

console.log("--------------------------");

// display all students in reverse order
for (let i = students.length - 1; i >= 0; i--) {
  console.log(students[i]);
}

console.log("--------------------------");

let email = 'super@email.com';

// Check if the email is valid
if (email.includes('@')) {
  let domain = email.substring(email.indexOf('@') + 1);
  console.log("Domain: ", domain);
} else {
  console.log("Invalid email");
}

console.log("--------------------------");


// create an array of numbers and add 7 numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, -20, 0, 100];

// use for loop to print all numbers in the array
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("--------------------------");

// write a program tha can display a max and min value from an array
let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

console.log("Max Value: ", max);
console.log("Min Value: ", min);

console.log("--------------------------");

// create an array of numbers with 10  numbers and array is in unsorted order
let unsortedNumbers = [7, 5, 9, 1, 2, 3, 6, 8, 4, 0];

// sort the array in ascending order using bubble sort
for (let i = 0; i < unsortedNumbers.length; i++) {
  let swapped = false;
  for (let j = 0; j < unsortedNumbers.length - i - 1; j++) {
    if (unsortedNumbers[j] > unsortedNumbers[j + 1]) {
      // swap elements
      let temp = unsortedNumbers[j];
      unsortedNumbers[j] = unsortedNumbers[j + 1];
      unsortedNumbers[j + 1] = temp;
      swapped = true;
    }
  }
  // If no swaps were made during an iteration, the array is already sorted
  if (!swapped) {
    break;
  }
}

console.log("Sorted Array: ", unsortedNumbers);