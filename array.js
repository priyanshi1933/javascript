const cars=["BMW","Hyundai","Audi"];
cars[0]="Kia";
console.log(cars.toString());
console.log(cars.sort());
console.log(cars.reverse());
console.log(cars.shift());
console.log(cars.unshift("Nano"));
console.log(cars.length-1);

//looping array element
const fruits=["Apple","Banana","Mango"];
fruits.push("Orange");
fruits[fruits.length]="Strawberry";
console.log(fruits.indexOf("Apple")+1);
console.log(fruits.lastIndexOf("Apple")+1);
console.log(fruits.includes("Apple"));
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
