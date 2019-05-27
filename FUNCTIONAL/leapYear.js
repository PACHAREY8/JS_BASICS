module.exports={
 leapyear()
 {
const read=require('readline-sync');
var year=read.question("Enter year");
if(year.length==4)
    {
    if((year%4==0)||(year%400==0)&&(year%100!=0))
      {
        console.log("Year is leap year")
      }
    else
      {
         console.log("year is not leap year")
     }
    }
    return year;
  
 }
}
