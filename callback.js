function myDisplay(some){
    console.log(some);
}
function myCalc(a,b,callback){
    let sum=a+b;
    callback(sum);
}
myCalc(5,5,myDisplay);