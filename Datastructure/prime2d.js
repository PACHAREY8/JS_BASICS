function prime2d()
{
    const read=require('readline-sync');
    var prime=require('../Datastructure/findprime');
    var index=read.question("Enter first index");
  //  var show=require('util');
    var parray=[[],[],[],[],[],[],[],[],[],[]];
    var initial=0;
    var final=100;
     var length=parray.length;
    
    
try
{
  
    if(index==0 || index<10)
    {
        console.log("prime numbers are :")
        for(;index<length;index++)
        {
           
            parray[index]=prime.findprime(initial,final);
            
            initial=initial+100;
            final=final+100;
        }
      //  console.log(parray[index]);
    //length=parray.length;
    var start=0;
    var end=100;
    for(var ind=0;ind<length;ind++){
        console.log("["+"["+start+"-"+end+"]"+" "+"[" + parray[ind] + "]"+"]")
        start=start+100;
        end=end+100;
       
    }
    }
    else
    {
        console.log("Number not printed in that range");
    }
} 
catch(err)
{
console.log("error");
}
    
    var array=[];
    array[0]=index;
    return array;

}
module.exports=prime2d();