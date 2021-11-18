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

var book;

seneca.add({ search: "book", by: "reviews" }, (msg, respond) => {
    console.log("inside add metho");

    // seneca.ready(function (err) {

    book = seneca.make("books");

    book.list$({}, function (err, list) {
        list.forEach(function (book) {
            if (msg.reviews == book.reviews) {
                respond(null, { result: "Book found" + book });
            }
        });
    });

    seneca.close(function (err) {
        console.log("database closed!");
    });
});



seneca.act({ search: "book", by: "reviews", reviews: "good" }, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

//Filtering the data onm the basis of page



seneca.add({ search: "book", by: "rating" }, (msg, respond) => {
    console.log("inside add metho");

    // seneca.ready(function (err) {

    book = seneca.make("books");

    book.list$({}, function (err, list) {
        list.forEach(function (book) {
            if (msg.rating == book.rating) {
                respond(null, { result: "Book found" + book });
            }
        });
    });

    seneca.close(function (err) {
        console.log("database closed!");
    });
});


seneca.act({ search: "book", by: "rating", rating: 4.5 }, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});
