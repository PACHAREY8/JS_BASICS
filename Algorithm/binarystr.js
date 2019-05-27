var x;
var arr=["apple","banana","grapes","mango","orange"];
function bsearch(arr,x){
    var min=0;
    var max=arr.length-1;
    var mid=Math.floor((max+min)/2);
    while(arr[mid]!=x && min<max){
    if(arr[ mid]==x){
        return arr[mid];
    }
    else if(x>arr[mid]){
        min=mid+1;
    }
    else{
        max=mid-1;
    }
    mid=Math.floor((max+min)/2);

}
     return (arr[mid]!=x)?-1:mid;
    }

    console.log(bsearch(arr,'grapes'));
