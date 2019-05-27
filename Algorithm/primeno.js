const read=require('readline-sync');
var n=read.question("enter last no ");
var i;
var j;
// var array=[];

for(i=1;i<=n;i++){
  var  isprime=false;
    for(j=2;j<i;j++){
    if(i%j==0){
        isprime=false;
        break;
    }
    else{
    isprime=true;
    }
}
if(isprime){
    console.log(i);
  //  array.push(i);
     }
    
}


   