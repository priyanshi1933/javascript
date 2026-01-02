let x=5;
try{
    x=y+1;
}catch(err){
    let n=err.name;
    let m=err.message;
    console.log(n);
    console.log(m);
}