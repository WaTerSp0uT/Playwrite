// By the default all the functions are public 
function greetings(){
    console.log('Hello there');
    console.log('Hello Cydeo');
    console.log('Hello World');
    console.log('------------------------');
}

greetings();
greetings();
greetings();
greetings();

console.log('Test Coplete successfully');

console.log('------------------------');

function displayValue(value = "Default Value"  ){
    console.log("The value to dspaly is:" + value);
}

displayValue(100);
displayValue("Okayyyy");
displayValue();

console.log('------------------------');

function square(number){
   let result = number * number;
    return result;
}

