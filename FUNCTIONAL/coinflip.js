module.exports=
{
    coin(){
const read=require('readline-sync');
var n=read.question("Enter how many time you want to flip the coin");
var head=0;
var tail=0;
var r;
if(n>0){
    for(var i=1;i<=n;i++){
      var r=Math.random()*2;
        if(r<0.5){
            tail=tail+1;
            
        }
        else{
            head=head+1;
            
        }
    }
    var headper=head/n*100;
var tailper=tail/n*100;

console.log("calculated percentage of head :"+headper);
console.log("calculated percentage of tail :"+tailper);



}
return headper;

    }
}