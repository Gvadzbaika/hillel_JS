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

    // Task 2

    function memoize(fn) {
        const cache = new Map();
        const cached = (val) => {
          return cache.has(val)
            ? cache.get(val)
            : cache.set(val, fn.call(this, val)) && cache.get(val)
        };
        cached.cache = cache;
        return cached
      }

   
    