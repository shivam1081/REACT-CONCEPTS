var express = require('express');
var server = express();
var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/training";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
var connection = mongoose.connection;
var Schema = mongoose.Schema;
var addressSchema = new Schema({
    street: String,
    city: String,
    pincode: Number
})
var personSchema = new Schema({
    name: String,
    phonenumber: String,
    address:[addressSchema]

})

var personModel = mongoose.model('person', personSchema);




// var person1 = new personModel({
//     name: "Anu",
//     phonenumber: "7999947393",
//     address:[{street:"xyz street",city:"Bengal",pincode:234567}]
// })
// person1.save((err) => {
//     if (!err) {
//         console.log("Data Saved in the Database");
//     }
// });



// personModel.find({ name: 'Anu'}, (err, users) => {
//     if (err) {
//         console.log("Error:" + err);

//     }
//     else {
//         console.log("Single record" + users);
//     }
// });

// personModel.findOneAndUpdate({ name: 'Anu' },{name:'Anuj'} ,(err, user) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(user);
//     }
// })

personModel.findOneAndDelete({ name: 'Anuj' },(err, user) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(user);
    }
})

/* personModel.find((err, data) => {
//     console.log(data);
// })*/
server.listen('7000', () => { console.log("Server at port 7000");})