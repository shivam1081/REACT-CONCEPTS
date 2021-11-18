const fs=require('fs');

var data="Hello welcome to thirst world"

//fs.writeFileSync('test.txt',data);

fs.appendFile('test.txt',data,()=>{console.log("file written success")})



console.log("file written successfully");