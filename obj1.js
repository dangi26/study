//instance object

let emp=new Object();
emp.id=101;
emp.name="ram";
emp.age=25;


delete emp.age;
console.log(emp.id, emp.name, emp.age);

//object by constructor

function e(id,name,age){
    this.id=id;
    this.name=name;
    this.age=age;
}
e1= new e(102,"naman",26);
console.log(e1.id,e1.name,e1.age);


