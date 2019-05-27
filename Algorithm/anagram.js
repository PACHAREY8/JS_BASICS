 function anagram (){
 const read=require('readline-sync');
 var str1=read.question("enter first string");
 var str2=read.question("Enter second string");
 if(str1.length!=str2.length){
     return false;
 }
 
 for(var i=0;i<=str1.length;i++){
     for(var j=1;j<=str1.length;j++){
         if(str1.charAt(i)===str2.charAt(j)){
             return true;
         
     }
 }
 }
}
 if (anagram()){
     console.log("two strings are anagram to each other");
 }
 else{
     console.log("two stringd are not anagram to each other")
 }
 
 
 
