var arr=[1,8,5,6,9,4,3];
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++)
    if(arr[i]>arr[j]){
        var temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }

}
function print(arr){
    for(var i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
print(arr);