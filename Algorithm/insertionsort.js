var arr=[1,2,6,5,4,8,3];
for(var i=1;i<arr.length;i++){
    var temp=arr[i];
    var j=i-1;
    while(j>=0 && arr[j]>=temp){
        arr[j+1]=arr[j];
        j--;
    }
    arr[j+1]=temp;
}
function print(arr){
     for(var i=0;i<arr.length;i++){
         console.log(arr[i]);
     }
}
print(arr);