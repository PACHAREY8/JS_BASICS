module.exports={
    array(){
const read=require('readline-sync');
 var rows=read.question("Enter rows");
var col=read.question("Enter column");
var arr=new Array(rows);
for(var i=0;i<rows;i++){
    arr[i]=new Array(col);
  }

  for(var i=0;i<rows;i++){
    for(var j=0;j<col;j++){
        arr[i][j]=read.question("Enter values");
        
    }
}

  for(var i=0;i<rows;i++){
      for(var j=0;j<col;j++){
          console.log(arr[i][j]+" ");
      }
  }
    }
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


   

