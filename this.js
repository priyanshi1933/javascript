const myObj={
    firstName:"Priyanshi",
    lastName:"Danecha",
    fullName:function(){
        return this.firstName+" "+this.lastName;
    }
}
console.log(myObj.fullName());


function myFunction(arg1,arg2){
    this.fname=arg1;
    this.lname=arg2;

}
const obj=new myFunction("Nishtha","Danecha");
console.log(obj.fname);