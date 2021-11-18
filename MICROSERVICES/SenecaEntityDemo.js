var seneca = require('seneca')()
var entitites = require('seneca-entity')
//Storing it into the local memeory that is the RAM and One data at a time can be stored
seneca.use(entitites)
seneca.quiet()
var book = seneca.make('books');
book.id = 1
book.title = 'NodeJS in Action'
book.pages = 200


//Here we are retriving the data from the memory
book.save$(function (err, book) {
    console.log(book)
})

book.list$({}, function (err, list) {
    console.log("List of books");
    console.log("+++++++++++++++++");
    list.forEach(function (book) {
        console.log(book)
    })
})