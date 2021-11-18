var seneca = require("seneca")();

var mongostore = require("seneca-mongo-store");

var entity = require("seneca-entity");

seneca.quiet();

seneca.use(entity);

seneca.use("mongo-store", {
    name: "training",

    host: "127.0.0.1", //127.0.0.1

    port: 27017,
});

var employee;

// seneca.add({ search: "employee", by: "jobTitleName" }, (msg, respond) => {
//     console.log("inside add metho");

//     // seneca.ready(function (err) {

//     employee = seneca.make("Employee");

//     employee.list$({}, function (err, list) {
//         list.forEach(function (employee) {
//             if (msg.jobTitleName == employee.jobTitleName) {
//                 respond(null, { result: "Employee found" + employee });
//             }
//         });
//     });

//     seneca.close(function (err) {
//         console.log("database closed!");
//     });
// });


// seneca.act({ search: "employee", by: "jobTitleName", jobTitleName: "Developer" }, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// });



//Importing on the basis of region

seneca.add({ search: "employee", by: "region" }, (msg, respond) => {
    console.log("inside add metho");

    // seneca.ready(function (err) {

    employee = seneca.make("Employee");

    employee.list$({}, function (err, list) {
        list.forEach(function (employee) {
            if (msg.region == employee.region) {
                respond(null, { result: "Employee found" + employee });
            }
        });
    });

    seneca.close(function (err) {
        console.log("database closed!");
    });
});


seneca.act({ search: "employee", by: "region", region: "CA" }, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});





