var unorderedlist=require('../Datastructure/unorderedList');
var data = fileSystem.readFileSync('../Datastructure/Input.txt');
console.log("String read from file: "+data);
data= data.toString().split(' ');
function unorderedList(){
   
    var read=require('readline-sync')
    var element=read.question('Enter the element to search');
     //Validating the element which should not accept any integer value.
        
        if(element>='a' && element<='z'||element>='A' && element<='Z'){
            unorderedlist.unorderedList(data,element); 
        }
        else{
            console.log("plz enter a string...");
        }
        var array=[];
       
        array[0]=element;
        return array;
 }
module.exports=unorderedList();