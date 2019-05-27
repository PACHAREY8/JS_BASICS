/* importing assert and chai
 */
const assert=require('chai').assert;

/* getting main function
 */
const data=require('../Datastructure/calenderMain');

/* Description about data to be tested
 */
describe("Calender data validation testing",function(){
    it("Check for calender",function(){

        /* checking for varible wheather it is array or not
         */
       assert.isArray(data);
    });
    it("Length of Year should be four",function(){

        /* testing for length of year
         */
        assert.equal(data[1].length,4)
    })

});