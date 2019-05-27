const assert=require('chai').assert;
const num=require('../FUNCTIONAL/leapYear');
describe('year digit check',function(){

    it('year should be four digit',function (){
    let countyr=num.leapyear();
    console.log(countyr);
    assert.isTrue(countyr>999 && countyr <9999);
    
    });

});


