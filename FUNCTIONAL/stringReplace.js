"use strict";
module.exports={
replacee(){
const read=require('readline-sync');
var name=read.question("Enter your name");
var str="Hello <<UserName>>, How are you?";

if(name.length>=3){
    var rpl=str.replace("<<UserName>>",name);
    console.log(rpl);
}
return name
}
}


