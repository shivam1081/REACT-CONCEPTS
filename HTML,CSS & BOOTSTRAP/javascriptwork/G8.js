let emp = {
    empno:1111,
    empname:"Accenture",
    age:33,
    salary:34567.77,
    hobbies:["Singing","Dancing","Swimming","Jogging"],
    reportee:{empno:2222,empname:"Bangalore",age:22,salary:5678.88,hobbies:["Coding","Testing","Reading"]}
};

console.log("Employee No = ",emp.empno);
console.log("Employee Name = ",emp.empname);
console.log("Employee Age = ",emp.age);
console.log("Employee Salary = ",emp.salary);
console.log("Hobbies :");
for( let i=0;i<emp.hobbies.length;i++)
{
    console.log(emp.hobbies[i]);
}
console.log("=========Reportee Details=============");
console.log("Reportee No = ",emp.reportee.empno);
console.log("Reportee Name = ",emp.reportee.empname);
console.log("Reportee Age = ",emp.reportee.age);
console.log("Reportee Salary = ",emp.reportee.salary);
console.log("Reportee Hobbies :");
for( let i=0;i<emp.reportee.hobbies.length;i++)
{
    console.log(emp.reportee.hobbies[i]);
}