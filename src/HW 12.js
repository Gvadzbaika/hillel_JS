// Task 1

function summarize(num) {
    return function(x) {
        if (arguments.length == 0) {
            return num +1;
          }
          return num + x;
    };
}

let f = summarize(5);
console.log(f(), f(0), f(1), f(2), f(3)  );




function validate(fn, validator){
   
    return function(...args){
        if(validator(args)){
            return fn(...args)
        }else{
            throw new Error("Error validation");
        }
    }
}

function sum(a, b){
    return a + b;
}

function validNumber(value){
    return value.every(val => typeof val === 'number');
}

const valid = validate(sum, validNumber);
try {
    console.log(valid(5, '2'));
} catch (error) {
    console.log(error.message);
}

function counter(startValue, step) {
    let count = startValue; 
    
    function innerFunction() {
        return count;
    }

    innerFunction.increment = function(){
        count += step;
    }

    innerFunction.decrement = function(){
        count -= step;
    }

    innerFunction.reset = function(){
        count = startValue;
    }

    return innerFunction;

 }

 const testCount = counter(1,2);

 console.log(testCount());
 console.log(testCount());
 testCount.increment();
