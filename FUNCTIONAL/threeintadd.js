var arr=[1,0,-1,-2,3,0];
var b=true;
    for(var i=0;i<arr.length-2;i++){
        for(var j=i+1;j<arr.length-1;j++){
            for(var k=j+1;k<arr.length;k++){
                if(arr[i]+arr[j]+arr[k]==0){
                    console.log(arr[i]+" "+arr[j]+" "+arr[k]);
                    b=true;
                } 
            }
        }
    }
    if(b==false){
        console.log("number not exist");
    }



