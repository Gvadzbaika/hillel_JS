//Task 1

function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};
console.log (reverseString("hello"));

//task 2

function IsPalindrome(str) {
  let check = '';
  for (let i = str.length - 1; i >= 0; --i) {
    check += str[i];
  }
  return str == check;
};
console.log (IsPalindrome("hello"));
console.log (IsPalindrome("ollo"));


//Task 3

function nod(n, m) {
  if(m > 0) { 
    let k = n%m;
    return nod(m, k); 
  } 
  else { 
    return n;  
  }
};
  console.log(nod(10, 5));
  console.log(nod(42, 24));
  console.log(nod(12, 18));