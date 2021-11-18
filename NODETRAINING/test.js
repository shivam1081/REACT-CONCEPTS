function A(b) {
    console.log("Program starts");
    b();
    console.log("Program ends");
}
function B() {
    setTimeout(() => {
        console.log("Program will wait for 3 seconds");
    }, 3000);

    setTimeout(() => {
        console.log("Program will wait for 2 seconds");
    }, 2000);

    setTimeout(() => {
        console.log("Program will wait for 1 seconds");
    }, 1000);

    setTimeout(() => {
        console.log("Program will wait for 4 seconds");
    }, 4000);

    console.log("I am from B function");
}
A(B);

function information() {
    console.log("Program will wait for 3 Seconds");
}
