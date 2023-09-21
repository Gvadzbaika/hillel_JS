//Task 1

function showPrime(arr){

arr = arr.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

return arr;}

arr = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10 ];
console.log (showPrime(arr));

