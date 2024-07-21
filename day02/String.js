let schoolName = "SUPER SCHOOL";

console.log(schoolName.length);
console.log(schoolName.length -1);

console.log(schoolName.charAt(2));
console.log(schoolName[2]);

console.log("------------------------");

schoolName = schoolName.toLocaleLowerCase(); // String is immutable need to assign all the time

console.log(schoolName);

let expectedText = "JavaScript";

let actualText = "javascript";

console.log(expectedText === actualText);
console.log(expectedText == actualText);
console.log(expectedText.toLocaleLowerCase() == actualText.toLocaleLowerCase());
console.log("------------------------");

let s = 'Python Python';

s = s.replace('Python', 'JavaScript')  /// Will Replace only first matched one. (If u want to replace all need to use Reg Expressions)

console.log(s);

//Reg Expression Example

let d = "School School"; 

d = d.replace(/School/g, 'DOG');
console.log(d);
console.log("------------------------");

let str = 'ABC123ASDKDOGR23'; 
str = str.replace(/\d/g, '');
console.log(str);

console.log("------------------------");

let w = 'JavaScript';

for (let i = 0; i < w.length; i++) {
    console.log(i);
}
console.log("------------------------");

let email = 'hellow@gmail.com'

let domain = email.substring(email.indexOf('@') +1, email.lastIndexOf('.'));

console.log(domain);

console.log("------------------------");
// Concatanation

let employeeName = 'Rogesh';
let employeeAge = 35;

console.log('Employee name is: '+employeeName);
console.log('Employee age is: '+employeeAge);

//String Concatanations use this character ->> ` (backtick character)
console.log(`My name is ${employeeName} and my age is ${employeeAge}`);
