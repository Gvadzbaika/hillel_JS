function work(a, b) {
    alert( a + b ); // work - произвольная функция
  }
  
  function logArguments(fn) {
    
    function wrapper() {
        log.push([].slice.call(arguments));
        return fn.apply(this, arguments);
      }
  
    return wrapper;
  }
  
  let log = [];
  work = logArguments(work, log);
  
  work(1, 2); // 3
  work(4, 5); // 9
  
  for (var i = 0; i < log.length; i++) {
    var args = log[i]; 
    console.log( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
  }