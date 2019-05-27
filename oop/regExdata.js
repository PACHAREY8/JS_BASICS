module.exports={
    regex(name,fName,contactNo,date) 
    {
        const fs=require('fs');
          /* reading the text file
           */
        var d=fs.readFileSync('../oop/regEx.txt','UTF-8');
      
           /* using replace function replacing each and every data 
            */
        d=d.replace("<<name>>",name);
        d=d.replace("<<full_name>>",fName)
        d=d.replace("<<xxxxxxxxxx>>",contactNo)
        d=d.replace("<<xx-xx-xxxx>>",date);

           /* printing all the data
            */
        console.log(d)

    }
}
  
