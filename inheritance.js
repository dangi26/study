class A{
    constructor(){
        this.name='gopal';
    }
    show1(){
        return 'i am parent';
    }
}
class B extends A{
    constructor(){
        super();
        this.age=25;
    }
    show2(){
        return 'i am child'
    }
}
const obj=new B();
console.log(obj.show1());
console.log(obj.show2());
console.log(obj.name);
console.log(obj.age);
console.log(obj);




