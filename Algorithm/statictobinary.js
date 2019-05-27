// const read=require('readline-sync');
// var n=read.question("enter number");
var n;
function binary(n){
    if(n>1)
        binary(n/2);
        console.log(Math.floor(n%2));
}
binary(106);
