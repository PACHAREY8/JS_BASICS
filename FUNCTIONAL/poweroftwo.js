const read=require('readline-sync');
var n=read.question("Enter number");
for(var i=1;i<=n;i++){
    var power=Math.pow(2,i);
    console.log(power);
}