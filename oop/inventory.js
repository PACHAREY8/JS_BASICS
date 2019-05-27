module.exports=
{
   
     inventorydisp(object)
     {
           /*  Making object of json data 
           */
        var rice = object.Rice;
        var pulses=object.Pulses;
        var wheat=object.Wheat;
          

          /* Displaying individual data of an array of Rice from json file
           */
         for(key in rice)
         {
             console.log(" Name : "+rice[key].type+"  Weight : "+rice[key].weight+
             "  rate : "+rice[key].rate);
            
         }
         console.log();

           /* Displaying individual data of an array of Pulses from json file
            */
         for(key in pulses)
         {
             console.log(" Name : "+pulses[key].type+"  Weight : "+pulses[key].Weight+
             "  rate : "+pulses[key].rate);
         }
         console.log();

           /* Displaying Individual data of an array of Wheat from json file
            */
         for(key in wheat)
         {
             console.log(" Name : "+wheat[key].type+"  Weight : "+wheat[key].weight+
             "  rate : "+wheat[key].rate);
         }

           /* making an empty array
            */
        var arr=[];

          /* inserting each data into an empty array
           */
        arr[0]=rice;
        arr[1]=pulses;
        arr[2]=wheat;

          /* returning array data
           */
        return arr;
     }
   

}

