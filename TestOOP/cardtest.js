/* importing chai and assert
 */
const assert=require('chai').assert;

/* getting file
 */
const apath=require('../oop/deckOfcars');

/* getting main function from file
 */
 var b=apath.deckfCards();
describe("cards testing ",function(){
it("Total are 52 are not",function(){
    /* checking for length of data
     */
    assert.equal(b.length,52)
});
});