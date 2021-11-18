var express = require('express');
var axios = require('axios');
var cors = require('cors');

server = express();
server.use(cors());

server.get("/", (req,res)=>{

    var rating = parseFloat(req.query.rating);

    axios.get("http://localhost:3002/act?search=book&by=rating&rating=" + rating)
    .then((result)=>{
        // console.log("hello")
        console.log(result.data);
        res.send(result.data);
    })
    .catch((err)=>{
        res.send(err)
    });
})

server.listen(7000, ()=>{
    console.log("Express server waiting at port 7000");
})