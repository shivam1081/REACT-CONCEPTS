console.log("Hello, Welcome to JavaScript");
console.log("X = ",X);
var X = 200;
F1();   // Function is Called before Defining it  // Function Hoisting is implicitly happening
function F1()
{            // Variable Hoisting is happening Implicitly
    console.log("X (inside F1) = "  , X);   // undefined
    console.log("Hello, I am Function F1....");

    var X = 400;

}


console.log("X = ",X);   // 400