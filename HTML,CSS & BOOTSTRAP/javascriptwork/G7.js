function compute() 
{
    var x=10;    // local variable
    function display ()
    {       // Closure 
               x++;
               console.log("x = "+x);   
    }
     return display;    
 }
var f1 = compute();
f1();
f1();
f1();
f1();
