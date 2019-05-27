const assert=require('chai').assert;
const num=require('../FUNCTIONAL/harmonic');
 
describe('harmonic number test', function(){
    var n=num.harmonic();
    it('number not less than zero',function(){
        assert.isTrue(n>1);

    });




});