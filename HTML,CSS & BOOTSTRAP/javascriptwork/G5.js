function AF()
{
    console.log("Hello, I am AF Function");
}


function F1(af)
{
    console.log("Hi, I am Function F1....");
    af();
    function Inner()
    {
        console.log("I am Inner Function...")
    }
    Inner();
    return Inner;
}

let RF = F1(AF);    
RF();