/* importing assert and chai
 */
const assert=require('chai').assert;

/* getting path of main function
 */
const data=require('../Datastructure/balanceParenthesis');

/* Description about testing
 */
describe("Expression Check",function(){
    it("Expression checking",function(){

        /* checking for is given input is empty or not
         */
        assert.isNotEmpty(data)
    })
})
