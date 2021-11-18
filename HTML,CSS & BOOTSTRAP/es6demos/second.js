class demo {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log("Name:- " + this.name);
        console.log("Age:-" + this.age);
    }
}
let obj = new demo("Shivam", 22);
obj.display();
let obj2 = new demo("Dubey", 22);
obj2.display();
