module.exports={
    coupon(){
 const read=require('readline-sync');
 var num=read.question("Enter a number");
var arr=new Array(num);
var b=false;
for(var i=0;i<num;i++){

    arr[i]=Math.floor(Math.random()*1000);
    for(var j=i+1;j<=num;j++)
  
        arr[j]=Math.floor(Math.random()*1000);
        if(arr[i]==arr[j]){
            b=false;
        }
       
    
}
if(b=true){
    console.log(arr[i]);
}
return num;
    }
}

