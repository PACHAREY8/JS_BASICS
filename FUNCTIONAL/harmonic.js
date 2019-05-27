module.exports={
    harmonic(){
const read=require('readline-sync');
var num=read.question("Enter a number");
var sum=0;
for(var i=1;i<=num;i++){
    sum=sum+1/i;
}
console.log(sum);
return num;
    }
}