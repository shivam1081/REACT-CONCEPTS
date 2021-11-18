var seneca = require("seneca")();

var mongostore = require("seneca-mongo-store");

var entity = require("seneca-entity");

seneca.use(entity);

seneca.use("mongo-store", {
    name: "training",

    host: "127.0.0.1", //127.0.0.1

    port: 27017,
});

seneca.ready(function (err) {
    var book = seneca.make("books");

    book.id = 3;

    book.title = "Action";

    book.pages = 314;

    book.save$(function (err, book) {
        if (err) return console.log(err);

        book.list$({}, function (err, list) {
            list.forEach(function (book) {
                console.log(book);
            });
        });
    });

    seneca.close(function (err) {
        console.log("database closed!");
    });
});
