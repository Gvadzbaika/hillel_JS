//Task 1

let number = +prompt('Enter number')

if (number % 3 == 0 && number % 5 == 0 ){
    console.log("FizzBuzz");
} 
else if (number % 3 == 0){
    console.log("Fizz");
}
else if(number % 5 == 0){
    console.log("Buzz");
}
else if (isNaN(number)){
    console.log("Incorrect value")    
}
else {
    console.log("Sprry! The number is not divisible by 3, by 5, or by 3 and 5")    
} 


//task 2

function isLeapYear (year) {
    return new Date(year, 1, 29).getMonth() == 1
}
let year = +prompt("Enter year:");

if(isNaN(year)){
    console.log("Incorrect value")
}
else if(isLeapYear(year)){
    console.log("Year " + year + " - A leap year.");
} 
else {
    console.log("Year " + year + " - Not a leap year.");
}

//Task 3

let age = +prompt('Enter age');
let count = age % 100;

if (count >= 10 && count <= 20){
    console.log (age + " років")
}
else{
    count = age % 10;
    
if (count === 1){
    console.log (age + " рік")
}
else if(count >= 2 && count <=4 ){
    console.log (age + " роки")
}
else {
    console.log (age + " років")
}
}
