function myDisplay(some){
    console.log(some);
}
async function myFunction(){
    return "Hello";
}
myFunction().then(
    function(value)
    {
        myDisplay(value);
    }
)