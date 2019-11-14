class Employee{
    constructor(id, name){
        this.id=id;
        this.name=name;
    }
    show(){
        console.log(this.id, this.name);        
    }
}
const e1=new Employee(101, 'gopal');
const e2=new Employee(102, 'naman');
e1.show();
e2.show();