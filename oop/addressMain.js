/* Main function for Address book 
*/
function Address()
{
    const read=require('readline-sync');
    const fs=require('fs');

    /* getting path of Address book
     */
    var apath= require('../oop/address');

    /* Reading the json file
     */
    var file=fs.readFileSync('../oop/addrJson.json','UTF-8');

    /*  Parses the string
    */
    var object=JSON.parse(file);

    /* Calling main function using path
      */
    apath.AddressBook(object,read);
    
}
module.exports=Address();
