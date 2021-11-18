const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.items = ["Bangalore", "Bombay", "AP", "Madras", "Delhi", "calcutta"];

myEmitter.on("changedItem", function () {
    console.log("event has occured");

    console.log(
        "index:" +
            this.lastIndexChanged +
            " value:" +
            this.items[this.lastIndexChanged]
    );
});

function setItem(index, value) {
    myEmitter.items[index] = value;

    myEmitter.lastIndexChanged = index;

    myEmitter.emit("changedItem");
}

setItem(0, "Bengaluru");
