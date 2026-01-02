const person={
    firstName:"Nishtha",
    lastName:"Danecha",
    age:22
}
// for(let x in person){
//     console.log(person[x]);
// }
console.log(JSON.stringify(person));

//using empty object
const p={};
p.fn="Priyanshi";
p.ln="Danecha";
p.a=22;
console.log(p.fn);
console.log(p.ln);
console.log(p.a);

//using new keyword
const per=new Object({
    firstname:"Priyanshi",
    lastname:"Danecha",
    Age:22
});
console.log(per["firstname"]);
console.log(per["lastname"]);
console.log(per["Age"]);


//nested objects
myObj={
    name:"Priyanshi",
    myCars:{
        car1:"BMW",
        car2:"Kia",
        car3:"Audi"
    }
}
console.log(myObj.myCars.car1);
console.log(myObj.myCars["car2"]);
console.log(myObj["myCars"]["car3"]);
