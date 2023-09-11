//Task 1

function doubleLetter(str) {
  let newString = "";
  for (i=0; i<str.length; i++) {
    newString += str[i].repeat(2);
  }
  return newString;
};
console.log (doubleLetter("hello"));

//task 2

function padString(str, length, symbol, toLeft) {

if (length<=str.length){
    return str}
    
  else  if (toLeft==true) {
    
    return str.padStart(length,symbol)
  } 
  else{
    return str.padEnd(length,symbol)
  }
};

console.log (padString("Sun", 10, "*"));
console.log (padString("Sun", 6, "*", true));
console.log (padString("Sun", 10, "*", false));
console.log (padString("Sun", 6, "/", true));
console.log (padString("Sun", 10));
console.log (padString("Sun", 1, "*", true));





//Task 3

  function toCamelCase(str, separator) {
    const words = str.split(separator);
    return words.reduce((result, word, index) => {
      if (index === 0) {
        return result + word;
      }
      return result + word.charAt(0).toUpperCase() + word.slice(1);
    }, '');
  }
  
  console.log(toCamelCase("hello-world", '-')); 
  console.log(toCamelCase("hello_world", '_'));
  console.log(toCamelCase("hello-world-this-is-camel-case", "-")); 
  console.log(toCamelCase("hello world this is camel case", " "));