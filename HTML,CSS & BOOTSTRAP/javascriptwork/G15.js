class Employee
{
        constructor(empno,empname,age,salary)
        {
            this.empno=empno;
            this.empname=empname;
            this.age=age;
            this.salary=salary;
        }
        Display()
        {
            console.log("=========== EMPLOYEE Details ================");
            console.log("Employee No = ",this.empno);
            console.log("Employee Name = ",this.empname);
            console.log("Employee Age = ",this.age);
            console.log("Employee Salary = ",this.salary);
        }
}
class ASE extends Employee{
    constructor(empno,empname,age,salary,ra,ta)
    {
        super(empno,empname,age,salary);
        this.ra=ra;
        this.ta=ta;
    }
    Display()
    {
        console.log("=========== ASE Details ================");
        super.DisplayEmployee();
        console.log("Relocation Allowance = ",this.ra);
        console.log("Travel Allowance = ",this.ta);
    }
}
let ase = new ASE(2222,"Bangalore",66,45678.88,5555.55,77777.77);
ase.DisplayASE();