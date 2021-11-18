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

var bookData = [];

book = seneca.make("books");

function init(msg, respond) {
    console.log("Plugin Initialized.");
}

module.exports = function training(option) {
    this.add({ search: "book", by: "rating" }, (msg, respond) => {
        console.log("inside add method");

        book.list$({}, function (err, list) {
            list.forEach(function (book) {
                if (msg.rating == book.rating) {
                    bookData.push(book);
                }
            });

            console.log(bookData);

            respond(null, { result: "Book found" + bookData });
        });

        // this.close(function (err) {
        //     console.log("database closed!");
        // });

        this.add({ init: "training" }, init);
    });
};


