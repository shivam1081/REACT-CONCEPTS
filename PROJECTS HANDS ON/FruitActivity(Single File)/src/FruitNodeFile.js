//Storing the data in the table using the post method

var express = require("express");
var server = express();

const bodyParser = require("body-parser");
server.use(bodyParser.json());

var mongodb = require("mongodb");
var mongoclient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/";

var cors = require("cors");
server.use(cors());

server.use(express.urlencoded({ extended: false }));
//==================== fetch all data =======================

server.get("/getFruit", (req, res) => {
    console.log(req.method);

    mongoclient.connect(url, (error, response) => {
        if (error) {
            console.log("error while connecting");
        } else {
            console.log("connected to mongo server");

            var database = response.db("training");
            database
                .collection("fruits")
                .find({})
                .toArray((err, data) => {
                    if (err) {
                        console.log("error in fetching data");
                    } else {
                        console.log(data);
                        res.send(data);
                    }
                });
        }
    });
});

//================ add data to mongo using post =================

server.post("/addFruit", (req, res) => {
    console.log("..... req body ....");
    console.log(req.body);
    // var empArr = req.body.empArr;

    mongoclient.connect(url, (error, response) => {
        if (error) {
            console.log("error while connecting");
        } else {
            console.log("connected to mongo server");

            var database = response.db("training");
            database.collection("fruits").insertOne(req.body);
            console.log("Data saved");
        }
    });

    res.send("Hiiiiii..");

    console.log("received data");
    res.end();
});

server.listen(7000, () => {
    console.log("server started");
});
