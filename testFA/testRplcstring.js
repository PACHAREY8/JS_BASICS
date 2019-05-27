
const ass=require('chai').assert;
const read=require('../FUNCTIONAL/stringReplace');

describe('Checking for string',function(){
    var result=read.replacee();
    console.log(result);
   
    it('type should be of string type',function(){
       
       ass.typeOf(result,'string')
       
   
    });
   
});