const read=require('readline-sync');
var printana=require('../Datastructure/stackAP');
var prime=require('../Datastructure/primeAnagram');
 function stackanagram()
 {
     var anap=new printana.StackedLink;
     var initial=read.question("Enter initial value");
     var final=read.question("Enter final value");
     var arr=[[]];
     if(initial<0){
         console.log("stack is underflow");
     }
     else if(final >1000) {
         console.log("Stack is overflow");
     }
     else{
         arr=prime.AnaPrime(initial,final);
         for(var i=0;i<arr.length;i++){
             anap.push(arr[i]);
         }
     //    console.log();
         console.log("Initial Linked list is : ");
         anap.display();
         var top=anap.getHead();
        // console.log();
          console.log("Reverse linked list is :");
        
         anap.dispReverse(top);
         
     }
     var array=[];
     array[0]=initial;
     array[1]=final;
     array[2]=top;
     array[3]=arr[0];
     return array;

 }
 module.exports= stackanagram();