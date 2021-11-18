// var seneca = require('seneca')();
// seneca.quiet();//only the information that we are asking is displayed
// console.log(seneca.id);

var seneca = require("seneca")();

//add an action  to the pattern
seneca.add("role:math,cmd:sum", (msg, reply) => {
    console.log(msg.cmd + "" + msg.role);
    reply(null, { answer: msg.left + msg.right });
});
seneca.quiet();
//calling an action for the perticular pattern
seneca.act({ role: "math", cmd: "sum", left: 1, right: 2 }, (err, result) => {
    if (err) return console.error(err);
    console.log(result);
});
