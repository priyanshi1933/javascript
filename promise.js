function myDisplay(some){
    console.log(some);
}
let myPromise=new Promise(function(resolve,reject){
    let x=0;
    if(x==0){
        resolve("OK");
    }else{
        reject("Error");
    }
});
myPromise.then(
    function(value){
        myDisplay(value);
    },
    function(error){
        myDisplay(error);
    }
    
)