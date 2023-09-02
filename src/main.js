//Task 1
let n = +prompt('Enter number')
function isPrime(n) { 
    let k = Math.sqrt(n); 
    for(let i = 2; i <= k; i++)
        if(n % i === 0)
            return false;
    return true;
}

if (isNaN(n)){
    alert("Incorrect value")
}    
else if (isPrime(n)){
    alert("Число " + n +" є простим числом")
}
else{
    alert("Число " + n +" не є простим числом")
}

//task 2

function getPerfect(a, b) {
    let result = [];
    for (let i = a; i < b; i++) {
      sum = 0;
      for (let n = 1; n <= i/2; n++) {
        if (i % n === 0) sum += n;
      }
      if (i === sum) result.push(i);
    }
    return result;
  }

  let num = +prompt('Enter number')

  if (isNaN(num)){
    console.log("Incorrect value")
}    
  else {console.log(getPerfect(1, num))};

//Task 3

 let height = +prompt('Enter height of triagle'); 
 
 function printTriangle(){
    let print = "";
 for (let n = 1; n <= height; n++) {
      for (let space = 1; space <= height - n; space++) {
    print += " ";
   } 
      for (let num = 1; num <= 2 * n - 1; num++) {
    print += "*";
   }
   print += "\n";
}
return print
}

if (isNaN(height)){
    alert("Incorrect value")
}    
  else {
    alert(printTriangle(height))
};