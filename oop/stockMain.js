function stockprint()
{
      /* exporting fs 
       */
    const fs=require('fs');

      /* Reading json file
       */
    const spath=fs.readFileSync("../oop/StockData.json");

      /* getting path of stockcheck function
       */
    const read=require('../oop/stockData');

      /* parsing json string
       */
    var object=JSON.parse(spath);

      /* calling  stockcheck function
       */
    read.stockCheck(object);

      /* returning  an object
       */
    return object;
    
}
module.exports=stockprint();