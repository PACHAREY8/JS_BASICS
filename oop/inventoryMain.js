function report()
{
      /* importing fs */
    const fs=require('fs');

      /* assigning the path to json file
       */
    const read=fs.readFileSync("datamgt.json");

      /* path for js file
       */
    var inp=require('../oop/inventory');

      /* parsing the json string
       */
    var object=JSON.parse(read);

      /* calling inventorydisp method */
    inp.inventorydisp(object);

      /* returning the object
       */
    return object;


}
module.exports=report();



