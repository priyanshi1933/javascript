let arr = [40, 30, 46, 60, 10, 4];
let max = arr[0];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log("max is=" + max);
console.log("min is=" + min);

//another technique
console.log(Math.max(...arr));
console.log(Math.min(...arr));

//map
const n1=[10,20,30,40,50];
const n2=n1.map(myFunction);
function myFunction(value){
    return value*2;
}
console.log(n2);

//filter
const no1=[3,6,20,30,2];
const no2=no1.filter(myFunction);
function myFunction(value){
    return value>18;
}
console.log(no2);

//reduce
const num1=[3,6,20,30,200,450];
const sum=num1.reduce(myFunction);
function myFunction(total,value){
    return total+value;
}
console.log(sum);

//entries
const fruits=["Apple","Strawberry","Mango","Blueberry"];
const f=fruits.entries();
for(let x of f){
    console.log(x);
}

//spread
const arr1=[1,2,3];
const arr2=[4,5,6];
const arr3=[...arr1,...arr2];
console.log(arr3);

//rest
let a,rest;
const arr4=[1,2,3,4,5,6,7,8];
[a,...rest]=arr4;
console.log(a);
console.log(...rest);