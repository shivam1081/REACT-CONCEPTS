var fs = require('fs');
// var data = fs.readFileSync('test.txt', 'ascii');
fs.readFile('test.txt', 'ascii', (err, data) => {
    if (err) {
        console.log("problem in reading the file"+err);
    }
    else {
        console.log(data);
    }
})
console.log("Program ends here");