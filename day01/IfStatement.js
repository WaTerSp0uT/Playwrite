let score = 30;

// One condition
if (score >= 30) {
  console.log("PAss!");
}

console.log("----------------------");

// Two conditions
if (score >= 60) {
  console.log("PAss!");
} else {
  //otherwise
  console.log("FAilll!");
}

console.log("----------------------");
let number = 100;

if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

let grade = 85;

let result = "Grade: ";

if (grade >= 90) {
  result += "A";
} else if (grade >= 80) {
  result += "B";
} else if (grade >= 70) {
  result += "C";
} else if (grade >= 60) {
  result += "D";
} else {
  result += "F";
}

console.log(result);

console.log("--------------------------------------------------");

// Nested If 
score = 80;

if (score >= 0 && score <= 100) {
  // pass or failed
  if (score >= 60) {
    console.log("Passed");
  } else {
    console.log("Failed");
  }
  
} else {
  console.log("Invalid");
}
