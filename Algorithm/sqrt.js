var n;
function sqrt(n){
    var x=n;
    var y=1;
    var m=0.000001;
    while(x-y>m){
        x=(x+y)/2;
        y=n/x;
    }
    return x;
}
console.log(Math.floor(sqrt(49)));