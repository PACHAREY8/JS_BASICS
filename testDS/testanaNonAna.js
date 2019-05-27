/* import assert and chai
 */
const assert=require('chai').assert;

/* getting path of main function
 */
 const data=require('../Datastructure/anaNonAna');
 
 /* Description about Testing
  */
describe("Checking Anagram and Non Anagram ",function(){
    it("Checking for range",function(){

        /* checking for length of anagram and non anagram numbers
         */
        assert.isBelow(data.length,1000);
    });
});