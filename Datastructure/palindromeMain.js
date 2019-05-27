function palindromeCheck(){
    const read=require('readline-sync');
    var pald=require('../Datastructure/palindrome');
    var str=read.question("Enter a string");

    if(str>='a' && str<='z' || str>='A' && str<='Z')
    {
        var s=pald.palindrome(str);
    }
    else if(str=='')
    {
        console.log("Enter a string")
    }
    else{
        console.log("Enter string only")
    }
    return str;

}
module.exports=palindromeCheck();