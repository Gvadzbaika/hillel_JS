//Task 1

const words = ["apple", "banaNA", "kiWi", "ORANGE"];

function capitalizeStrings(arr){
    const capitalizeStringsArr =[];
    for (let word of arr) {
        word = word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        capitalizeStringsArr.push(word);
}
return capitalizeStringsArr;
}
console.log(capitalizeStrings(words));


// Task 2

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

function findCommonElements(arr1, arr2){
    return arr1.filter(function(n) {
        return arr2.indexOf(n) !== -1;
      });
}

console.log(findCommonElements(array1, array2)); // [3, 4, 5]

//Task 3

const numbers = [1, 2, 3, 4, 5];

function analyzeArray(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const min = Math.min(...arr);
    const max = Math.max(...arr);
  
    return {
      sum : sum,
      average: sum / arr.length,
      min: min,
      max: max,
    };
  }

console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }