const assert=require('chai').assert;
const bool=require('../FUNCTIONAL/coupon');

describe('random coupon match',function(){
    it('user value should be greater than zero',function(){
        var cpn=bool.coupon();
        console.log(cpn)
        assert.isTrue(cpn>1);
    });
});