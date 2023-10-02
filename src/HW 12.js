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
