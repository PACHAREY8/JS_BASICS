function aanagram(){
    const read=require('readline-sync');
   
    var ana=require('../Datastructure/primeAnagram');
    var initial=0;
    var final=1000;
   var prime=[];
   prime=ana.findPrime(initial,final);
   var anagram=[];
   anagram=ana.AnaPrime(initial,final);
   var nonana=[];
   var c=0;
    for(var i=0;i<prime.length;i++){
        if(!anagram.includes(prime[i])){
            nonana[c]=prime[i];
            c++;  
            }
        
        }
    
          var a=("["+nonana+"]"+ ":" +"["+anagram+"]");
          return a
          
        
}
module.exports=aanagram();




