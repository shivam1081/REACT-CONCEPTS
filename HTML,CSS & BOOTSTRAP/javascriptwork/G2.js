console.log("Hello, Welcome to JavaScript")
var X = 100;
function F1()
{   
    var X = 400;        // Variable Hoisting is happening Implicitly
   
    console.log("X (inside F1) = "  , X);   // undefined
    console.log("Hello, I am Function F1....");
    if (X > 100)
    {
        var Y = 200;
        console.log("Y inside if statement =" ,Y);
    }
    console.log("Y outside if statement =" ,Y);
}

F1();