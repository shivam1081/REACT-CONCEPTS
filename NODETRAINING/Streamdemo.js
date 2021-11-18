var fs = require("fs");

var zlib = require("zlib");

var gzip = zlib.createGzip();

var rstream = fs.createReadStream("test.txt");

var wstream = fs.createWriteStream("test.txt.gz");

rstream

    .pipe(gzip)

    .pipe(wstream)

    .on("finish", function () {
        console.log("done compressing");
    });
