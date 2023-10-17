

    function fun1(num, txt){
        if (num++ < txt.length){    
        console.log(txt[num]);
        setTimeout(fun1, rand(0, 1000), num, txt );
        }
        }
        
        fun1(-1,"Привет");

      
       