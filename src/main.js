//Task 1
function showPrime(arr){

    arr = arr.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      if (number <= 1) return false;

      return true;
    });
    
    return arr;}
    
    arr = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10, 11 ];
    console.log (showPrime(arr));

    // Task2

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
    
    console.log(result);
    
    //Task 3

    function groupByKey(array, key) {
        return array
          .reduce((hash, obj) => {
            if(obj[key] === undefined) return hash; 
            return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
          }, {})
     }

    console.log(groupByKey(notifications, 'source'));
    