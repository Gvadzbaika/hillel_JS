//Task 1

const originalArray = [1, 2, 3, 4, 5];

function reverseArray(arr) {
  const reverseArr = [];
  for (let i = arr.length - 1; i >= 0; i--)
  reverseArr.push(arr[i]);
  return reverseArr;
}

console.log (reverseArray(originalArray));

//task 2

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

function uniqueValues (array1, array2) {
  const mergedArray = [...array1, ...array2];
  const mergedArrayWithoutRepeat = [...new Set([...mergedArray])];
  return mergedArrayWithoutRepeat
 }

console.log(uniqueValues(array1, array2));
console.log(uniqueValues(['a', 'b'], ['a', 'b', 'c', 'd']));
console.log(uniqueValues("abcd", "abcde"));


//Task 3

const students = [
	{ name: "Alice", age: 20, grade: 4.5 },
	{ name: "Bob", age: 21, grade: 3.9 },
	{ name: "Charlie", age: 19, grade: 4.8 }
];

function calculateAverageGrade(students){
    
  let all = []
  for(let i = 0; i<students.length; i++){
      all.push(students[i].grade)
  }
  all = all.flat()
  return all.reduce((p,n)=>p+n)/all.length
}
  
console.log(calculateAverageGrade(students));