class employee {
    constructor(id, name) {
        this.name = name;
        this.id = id;
    }
    displayEmployee() {
        console.log("Name of the Employee:- " + this.name);
        console.log("ID of the employee:- " + this.id);
    }
}
class manager extends employee {
    constructor(name, id, dept) {
        super(name, id);
        this.dept = dept;
    }
    displayManager() {
        super.displayEmployee();
        console.log("Department:- " + this.dept);
    }
}
let objManager = new manager("Shivam", 12, "Information Technology");
objManager.displayManager();
