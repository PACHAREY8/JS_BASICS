/* importing assert and chai
 */
const assert=require('chai').assert;

/* getting path of main file
 */
const apath=require('../oop/address');
const fs=require('fs');

/* Reading json file
 */
var data=fs.readFileSync('../oop/addrJson.json');

/* parsing json string
 */
var addr=JSON.parse(data);

/* making an empty array
 */
var b=[];

/* putting json array inside b
 */
 b=addr.Details;

// console.log(b[1].zip)
 
/* Description about testing
 */
describe("Address book testing",function(){
it("zip and contact number should be a number",function(){

    /* checking for zip and contact_number are number */
    for(var i=0;i<b.length;i++){
     assert.isNumber(b[i].zip);
     assert.isNumber(b[i].Mob_No);
    }  
});
it("Name should be a string ",function(){
    /* checking for first name is string
     */

    for(var i=0;i<b.length;i++)
    {
    assert.isString(b[i].FName)
    }
});
});