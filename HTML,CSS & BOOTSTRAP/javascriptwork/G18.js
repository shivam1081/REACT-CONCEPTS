function Display(a)
{
    console.log("Display Function Called...");
    a();
}



Display(()=>
{
    console.log("Hello, Welcome to Arrow Function");
});