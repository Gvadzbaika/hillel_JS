//Task 1

function sumArrayPromise(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sum = arr.reduce((acc, num) => acc + num, 0);
      resolve(sum);
    }, 3000);
  });
}

//Test
sumArrayPromise([1, 2, 3, 4, 5])
  .then(result => {
    console.log(result); 
  })
  .catch(error => {
    console.error(error);
  });


  //Task 3
  function sequenceAsync(asyncFunctions) {
    return asyncFunctions.reduce((chain, asyncFunction) => {
      return chain.then((result) => {
        return asyncFunction(result);
      });
    }, Promise.resolve(0)); 
  }
  
  // Test
  function asyncFunction1(previousResult) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(previousResult + 1), 1000);
    });
  }
  
  function asyncFunction2(previousResult) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(previousResult * 2), 500);
    });
  }
  
  function asyncFunction3(previousResult) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(previousResult - 3), 800);
    });
  }
  
  const asyncFunctions = [asyncFunction1, asyncFunction2, asyncFunction3];
  
  sequenceAsync(asyncFunctions)
    .then((finalResult) => {
      console.log(finalResult);
    })
    .catch((error) => {
      console.error(error);
    });