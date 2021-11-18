var express = require('epxress');
var server = express();
function entrycheck(req, res, next) {
    if (req.query.verifyId === "passport") {
        console.log("Entry Allowed");
        next();
    }
    else {
        ressend("Not allowed");
    }
}
function LauggageCheck(req, res, next) {
    console.log("Luaggage Check Done");
    
}

function BoardingPass(req, res, next) {
    console.log("Pass Issued");
    next();
}
function SecurityCheck(req, res, next) {
    console.log("Body Scanning Done");
    next();
}
server.use(entrycheck);
server.use(LauggageCheck);
server.use(BoardingPass);
server.use(SecurityCheck);
append.get("/flight", (req, res)=> {
    res.send("Have a safe journey");
    res.end();
})
server.listen(7000, () => { console.log("Server at 7000 port");})