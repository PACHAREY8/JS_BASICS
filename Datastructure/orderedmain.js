var orderedlist=require('../Datastructure/orderedList');
var data = fileSystem.readFileSync('../Datastructure/oinput.txt');
console.log("number read from file: "+data);
data= data.toString();


function orderedList(){
   
    var read=require('readline-sync')
    var numbr=read.question('Enter the number to search');
     //Validating the element which should not accept any integer value.
       
        if(numbr>=0){
            orderedlist.orderedList(data,numbr); 
        }
        else{
            console.log("plz enter a number...");
        }
       
 }

module.exports=orderedList();