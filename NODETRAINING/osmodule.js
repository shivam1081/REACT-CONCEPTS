var os = require('os');

console.log(os.hostname());

console.log(os.type());

console.log(os.platform());

console.log(os.arch());

console.log(os.release());

console.log('percentage Memory consumed '+(100*(1 - os.freemem()/ os.totalmem())));