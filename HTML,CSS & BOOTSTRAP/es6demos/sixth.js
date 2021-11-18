let params = [2, 3, 4]
function calculate(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log("Sum of the number are " + calculate(...params));