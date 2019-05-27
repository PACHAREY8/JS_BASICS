/* importing assert and chai 
*/
const assert=require('chai').assert;

/* getting main function
 */
const data=require('../Datastructure/palindromeMain');

/* Description about testing  */
describe(" Checking for string",function(){
    it("Type of data checking",function(){

        /* checking for data is notEmpty
          */
        assert.isNotEmpty(data)
    });
    it("String validating",function(){

        /* checking and validating the string content
         */
        assert.isTrue(data>='a' && data<='z' || data>='A' && data<='Z')
    })

})