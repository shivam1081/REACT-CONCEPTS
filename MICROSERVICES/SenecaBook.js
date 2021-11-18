var seneca = require('seneca')();

seneca.quiet();



//requiring semecafun.js where we have all our microservices

 seneca.use(require("./SenecaBookclientrequest"));



//seneca server running on port 8000

seneca.listen({type:'http',port:3002},()=>{

    console.log(

        "Seneca Server running on port 3002....."

    );

})