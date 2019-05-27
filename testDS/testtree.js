/* importing assert and chai
 */
const assert=require('chai').assert;

/* getting main function 
*/
const data=require('../Datastructure/treeMain');

/* Description about testing
 */
describe(" Checking for Number length",function(){
    it("length should be greater than one",function(){

        /* boolean check for data  is greater than one or not
         */
        assert.isTrue(data>1)
    });
    
})