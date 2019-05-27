function report()
{
    /* initializing readline-sync
     */
    const rd=require('readline-sync');

    /* Asking user to enter weight in kg
     */
    var weight=rd.question("Enter weight in kg")

       /* importing fs
        */
    const fs=require('fs');

       /* reading json file
        */
    const read=fs.readFileSync("xinvjson.json");

       /*getting path of xInventory file
        */
    var inp=require('../oop/xInventory');

       /* parsing a json string
        */
    var object=JSON.parse(read);

       /* calling inventorydisp function
        */
    var cal=inp.inventorydisp(object,weight);

       /* Returning data
        */
    return cal;


}
module.exports=report();
