
/* importing chai and assert
 */
const assert=require('chai').assert;
var fs=require('fs');
/* Reading the json file
 */
var data=fs.readFileSync('../oop/datamgt.json');

/* parsing the json string
 */
var mgt=JSON.parse(data);

/* making an empty array
 */
var arr=[];

/* putting pulses inside an array
 */
arr=mgt.Pulses;

/* Description about Tesing
 */
describe("Inventory Check ",function(){
    it("rate less than 300",function(){

        /* Checking for rate of particulars are greater than 300
         */
        for(var i=0;i<arr.length;i++){
            assert.isTrue(arr[i].rate<300);
        }
    });
   
});