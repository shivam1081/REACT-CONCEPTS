function display() {
    let oldValue = 10;
    if (oldValue > 5) {
        let newValue = 10;
        newValue = newValue + oldValue;
        console.log("Old value of the variable " + oldValue);
        console.log("New value of the variable " + newValue);
    } else {
        console.log("Old value of the variable" + oldValue);
        console.log("New value of the variable" + newValue);
    }
}
display();
