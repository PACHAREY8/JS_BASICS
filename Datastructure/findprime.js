module.exports={

findprime(s1,s2)
{
var ary = [];
var t=0;
for (var i = s1; i <= s2; i++)
 {
    var isprime = false;
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            isprime = false;
            break;
        } else {
            isprime = true;
        }
    }
    if (isprime==true) {
           ary[t++]=i;
    }

 }
 return ary;
 }
}