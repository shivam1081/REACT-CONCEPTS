function F1()
{
    console.log("Hi, I am Function F1....");
    let X = "Hello";
    function Inner()
    {
        let Y = "Bangalore";
        console.log(X+Y);
    }
    return Inner;
}

let RF = F1();    

console.log("============1===========");
RF();
console.log("============2===========");