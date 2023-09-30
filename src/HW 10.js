    // Task 1

    const notifications = [
        { text: 'Alice', source: 'facebook', date: '19/09/2023' },
        { text: 'Bob', source: 'facebook', date: '19/09/2023' },
        { text: 'Charlie', source: 'telegram', date: '19/09/2023' },
      ];

      const result = notifications.reduce(function (accumulator, notifications) {
        const key = notifications.source;
        if (!accumulator[key]) {
            accumulator[key]=[];
        }
        accumulator[key].push(notifications)
        return accumulator;
    }, {});

    result[Symbol.iterator] = function() {
        let valueIndex =0;
        let inerIndex = 0;

        const values =[];

        for (const key in this){
            values.push(this[key]);
        }
        return { next() {
          
        if (inerIndex === values[valueIndex].length) {
            inerIndex = 0;
            valueIndex++;
        }

        if (valueIndex===values.length) return {done: true};
           
            return{
                value: values[valueIndex][inerIndex++],
                done: false
            }

        }
    }}

    

    for (const iterator of result ){
        console.log(iterator);
    }

    for (const {source} of result ){
        console.log(source);
    }

    //Task 2
    function slow(x) {
        alert(`Called with ${x}`);
        return x;
      }
      
      function memoize(fn) {
        let cache = new Map();
      
        return function(x) {
          if (cache.has(x)) {   
            return cache.get(x);
          }
      
          let result = fn(x); 
      
          cache.set(x, result); 
          return result;
        };
      }
      
      slow = memoize(slow);
      
      alert( slow(1) ); // slow(1) кешируем
      alert( "Again: " + slow(1) ); // возвращаем из кеша
      
      alert( slow(2) ); // slow(2) кешируем
      alert( "Again: " + slow(2) ); // возвращаем из кеша

   
    