const assert=require('chai').assert;
var num=require('../FUNCTIONAL/coinflip');
//var a=require('commander')
describe('number of time coin flip', function(){
  it('number of coin flip should be greater than 0',function (){
      let n=num.coin();
      console.log("n = "+n)
      assert.isNumber(n);
  });
  it('number of coin flip should be greater than 0',function (){
    let n=num.coin();
    console.log("n = "+n)
    assert.isTrue(n>1)
});
});








