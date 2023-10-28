//Task 1

function rand(min, max) {
  return (max - min) * Math.random() + min;
}

function randomDelayPrint(message, index = 0) {
  if (index < message.length) {
    console.log(message[index]);
    setTimeout(() => randomDelayPrint(message, index + 1), rand(0, 1000));
  }
}
const yourMessage = "Привет"; 

randomDelayPrint(yourMessage);


 //Task 2   
 function debounce(func, delay) {
  let timer;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

const expensiveOperation = () => console.log("Виконую складну операцію...");
const debouncedExpensiveOperation = debounce(expensiveOperation, 1000);

debouncedExpensiveOperation(); 
debouncedExpensiveOperation(); 
debouncedExpensiveOperation();  


      
       