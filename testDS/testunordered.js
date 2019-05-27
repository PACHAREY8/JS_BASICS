/* importing assert and chai
 */
const assert=require('chai').assert;

/* getting main function
 */
const data=require('../Datastructure/unorderedMain');

/* initializing fs
 */
const fs=require('fs');

/* reading text file
 */
const text=fs.readFileSync('../Datastructure/Input.txt')

/* making data string
 */
var txt=text.toString();

/* Description about testing
 */
describe("Data checking",function(){
    it("validating string",function(){

        /* tetsing and validating the string
         */
        assert.isTrue(data>='a' && data<='z'||data>='A' && data<='Z')
    });
    it("Text file checking",function(){

        /* checking for string not to be null
         */
        assert.isNotNull(txt);
    });
});