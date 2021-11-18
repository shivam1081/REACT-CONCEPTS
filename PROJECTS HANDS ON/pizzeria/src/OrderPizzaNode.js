var cors = require("cors");

var express = require("express");

var server = express();

server.use(cors());

server.use(express.urlencoded({ extended: false }));

server.use(express.static("public"));

var mongodb = require("mongodb");

var mongoclient = mongodb.MongoClient;

var url = "mongodb://localhost:27017/";

//This is for the Order Pizza Page
server.get("/getOrderPizza", (req, res) => {
    var connect = mongoclient.connect(url, (err, result) => {
        if (err) {
            console.log("Connection error!!");
        } else {
            console.log("Connected successfully!!");

            var db = result.db("training");

            db.collection("pizza")
                .find({})
                .toArray((error, data) => {
                    if (error) {
                        console.log("Could not fetch data");
                    } else {
                        console.log(data);

                        res.send(data);

                        res.end();
                    }
                });
        }
    });
});

//This is for the build your pizza page

server.get("/buildyourpizza", (req, res) => {
    var connect = mongoclient.connect(url, (err, result) => {
        if (err) {
            console.log("Connection error!!");
        } else {
            console.log("Connected successfully!!");

            var db = result.db("training");

            db.collection("buildpizza")
                .find({})
                .toArray((error, data) => {
                    if (error) {
                        console.log("Could not fetch data");
                    } else {
                        console.log(data);

                        res.send(data);

                        res.end();
                    }
                });
        }
    });
});

//------------------------------------------
server.listen(7000, () => {
    console.log("server running on 7000");
});
