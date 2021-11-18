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

seneca.add({ search: "book", by: "pages" }, (msg, respond) => {
    console.log("inside add metho");

    // seneca.ready(function (err) {

    book = seneca.make("books");

    book.list$({}, function (err, list) {
        list.forEach(function (book) {
            if (parseInt(msg.pages) == book.pages) {
                respond(null, { result: "Book found" + book });
            }
        });
    });

    seneca.close(function (err) {
        console.log("database closed!");
    });
});

// })

seneca.act({ search: "book", by: "pages", pages: "313" }, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});
