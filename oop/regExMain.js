const read=require('readline-sync')
    const rpath=require('../oop/regExdata');
function reg(){
    
      /* Ask user to input first name
        */
    var name=read.question("Enter your First name");

      /* validating using Regular Expression
       */
    if(!/[a-zA-Z]+$/.test(name))
    
         console.log("Enter String value")
    
     /* Ask user to input full name
     */
    var fName=read.question("Enter your Full name")

      /* validating using Regular Expression
       */
    if(!/[a-zA-Z]+$/.test(fName))
    
        console.log("Enter String only")
    
        /* Ask user to input Contact number
         */
    var contactNo=read.question("Enter Your Contact number")

      /* validating using Regular Expression
       */
    if(!/^\d{10}$/.test(contactNo))
        console.log("Enter only numbers having digits =10")
    
      /* making object of date
       */
    var dt=new Date();

      /* getting month data and full year
       */
    date=dt.getMonth()+"-"+dt.getDate()+"-"+dt.getFullYear();

      /* calling function regex
       */
    rpath.regex(name,fName,contactNo,date);

         /* creating an empty array
          */
     let arr=[];

       /* Pushing name ,full name and contact number inside an array
        */
     arr.push(name);
     arr.push(fName);
     arr.push(contactNo)

       /* retuurning an array
        */
     return arr;

}
module.exports=reg();