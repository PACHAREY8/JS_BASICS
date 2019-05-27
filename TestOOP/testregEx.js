/* importing the assert and chai
 */
const assert=require('chai').assert;

/* getting main file
 */
const data=require('../oop/regExMain');

/* initializing an empty array
 */
var arr=[];

/* tranfering the data inside an array
 */
arr=data;


/* Description about testing
 */
describe("Testing for string",function(){
    it("name should be of string type",function(){

        /* checking for the arrays zeroeth place element is string
         */
        assert.isString(arr[0])
    });

    it("Contact Number should be of 10 Digit",function(){
       /* checking for contact number length is equal to 10 
        */
        assert.equal(arr[2].length,10);
        
    });
});