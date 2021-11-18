function Employee(eno ,en, a, s)
{
    this.empno=eno;
    this.empname=en;
    this.age=a;
    this.salary=s;
    this.DisplayEmployee = function ()
    {
        console.log("Employee No = ",this.empno);
        console.log("Employee Name = ",this.empname);
        console.log("Employee Age = ",this.age);
        console.log("Employee Salary = ",this.salary);
    };
}

var emp1 = new Employee(3333,"Mumbai",55,67889.99);
emp1.DisplayEmployee();

var emp2 = new Employee(4444,"Kolkata",88,323.33);
emp2.DisplayEmployee();
