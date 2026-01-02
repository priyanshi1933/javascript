function myFunction(p1,p2=10){
    return p1*p2;
}
console.log(myFunction(6));

//Arrow function
let arrFunction=(a1,a2)=>a1*a2;
console.log(arrFunction(5,5));

function greet(name,age){
    return `Hello ${name}. You are ${age} years old`;
}
console.log(greet('Alice',22));