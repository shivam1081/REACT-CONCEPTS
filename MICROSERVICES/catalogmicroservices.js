var seneca = require("seneca")();
var books = require("./books.json");
seneca.add({ component: "catalog", by: "title" }, (args, respond) => {
    let book_found = books.find((book) => book.title === args.title);
    if (!book_found) {
        book_found = { title: args.title, message: "Book not found" };
    }
    respond(null, { book: book_found });
});
seneca.add({ component: "catalog", by: "pageCount" }, (args, respond) => {
    let bookPage_found = [];
    books.find((book) => {
        if (book.pageCount === args.pageCount) {
            bookPage_found.push(book);
        }
    });
    if (!bookPage_found) {
        bookPage_found = {
            pageCount: args.pageCount,
            message: "Book not found",
        };
    }
    respond(null, { book: bookPage_found });
});

// seneca.add({ component: "catalog", by: "review" }, (args, respond) => {
//     respond(null, { book: book_found });
// });

seneca.quiet();
seneca.act(
    { component: "catalog", by: "title", title: " by Example" },
    (error, response) => {
        if (error) console.log(error);
        console.log(response.book);
    }
);

console.log("__________________________________________");
seneca.act(
    { component: "catalog", by: "pageCount", pageCount: 316 },
    (error, response) => {
        if (error) console.log(error);
        console.log(response.book);
    }
);
// console.log("__________________________________________");
// seneca.act(
//     { component: "catalog", by: "category", reviews:"good" },
//     (error, response) => {
//         if (error) console.log(error);
//         console.log(response.book);
//     }
// );