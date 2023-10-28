//Task 1
function* fibonacci(n) {
  let a = 0;
  let b = 1;

  while (a <= n) {
    yield a;
    const temp = a + b;
    a = b;
    b = temp;
  }
}
//Test
const fibGen = fibonacci(10);

console.log(fibGen.next().value); 
console.log(fibGen.next().value); 
console.log(fibGen.next().value); 
console.log(fibGen.next().value); 
console.log(fibGen.next().value); 
console.log(fibGen.next().value); 
console.log(fibGen.next().value); 
console.log(fibGen.next().value); 
console.log(fibGen.next().value); 
 
//Task 2

function* flatten(arr) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      yield* flatten(item);
    } else {
      yield item;
    }
  }
}
//Test
const nestedArr = [1, [2, 3], [4, 5, [6, 7]]];
const flattenGen = flatten(nestedArr);

console.log([...flattenGen]);


//Task 3
async function* asyncGenerator(promises) {
  for (const promise of promises) {
    yield await promise;
  }
}

// Test
const promises = [
  new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 500)),
  new Promise((resolve) => setTimeout(() => resolve(3), 2000)),
];

(async () => {
  const asyncGen = asyncGenerator(promises);

  for await (const result of asyncGen) {
    console.log(result);
  }
})();




