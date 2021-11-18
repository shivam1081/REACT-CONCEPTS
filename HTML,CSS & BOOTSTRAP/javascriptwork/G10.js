function Employee()
{
    this.empno;
    this.empname;
    this.age;
    this.salary;
    this.DisplayEmployee = function ()
    {
        console.log("Employee No = ",this.empno);
        console.log("Employee Name = ",this.empname);
        console.log("Employee Age = ",this.age);
        console.log("Employee Salary = ",this.salary);
    };
}

var emp1 = new Employee();
emp1.empno = 2222;
emp1.empname = "Bangalore";
emp1.age = 66;
emp1.salary = 45678.88;
/* console.log("Employee No = ",emp1.empno);
console.log("Employee Name = ",emp1.empname);
console.log("Employee Age = ",emp1.age);
console.log("Employee Salary = ",emp1.salary); */
emp1.DisplayEmployee();

var emp2 = new Employee();
emp2.empno = 3333;
emp2.empname = "Accenture";
emp2.age = 77;
emp2.salary = 343434.88;
/* console.log("Employee No = ",emp1.empno);
console.log("Employee Name = ",emp1.empname);
console.log("Employee Age = ",emp1.age);
console.log("Employee Salary = ",emp1.salary); */
emp2.DisplayEmployee();
