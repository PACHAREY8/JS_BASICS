const  assert=require('chai').assert;
const numbr=require('../FUNCTIONAL/factors');
describe('prime factors testcase',function(){
    it('input number should be greater than one',function(){
        var factor=numbr.prime();
        assert.isTrue(factor>1);

    });
});
