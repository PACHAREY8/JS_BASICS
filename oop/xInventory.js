module.exports=
{
   
     inventorydisp(object,weight)
     {

          /* making object of json data like rice,pulses,wheat
           */
        var rice = object.Rice;
        var pulses=object.Pulses;
        var wheat=object.Wheat;
            /* making for in loop for rice
             */
         for(key in rice)
         {
              /* Displaying seperate value of Rice array and total weight of each content
               */
             console.log(" Name : "+rice[key].type+"  rate : "+rice[key].rate+
             " rate for total weight :"+rice[key].rate*weight);
            
         }
         console.log();

           /* making for in loop for Pulses
            */
         for(key in pulses)
         {

              /* Displaying Each content of pulses array and total weight of each content
                */
             console.log(" Name : "+pulses[key].type+"  rate : "+pulses[key].rate+
             " rate for total weight :"+pulses[key].rate*weight);
         }
         console.log();

           /* making for each loop for wheat
            */
         for(key in wheat)
         {

              /* displaying each content of wheat array and total weight of each content */
             console.log(" Name : "+wheat[key].type+" rate : "+wheat[key].rate+
             " rate for total weight :"+wheat[key].rate*weight);
         }
        
       /* making an Empty array
        */
       var arr=[];

       /* pushing Each and every element inside an array
        */
       arr.push[0]=rice;
       arr.push[1]=pulses;
       arr.push[2]=wheat;

       /* returning a array
        */
       return arr;

     }
   

}

