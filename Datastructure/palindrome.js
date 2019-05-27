function dequeue(){
    this.string=new Array();


    this.popback=function(){
        return this.string.pop();
    }

    this.pushback=function(item){
        return this.string.push(item);
    }

    this.popfront=function(){
        return this.string.shift();
    }

    this.pushfront=function(item){
        return this.string.unshift(item);
    }

    this.printqueue=function(){
        var str='';
        for(var i=0;i<this.string.length;i++){
            str=str+this.string[i];
        }
        return str;
    }

    this.getsize=function(){
        return this.string.length;
    }
}

module.exports=
{
    palindrome(str){
    let deque =new dequeue() ;
    var array=[];
    array=str.split("");
    for(var i=0;i<array.length;i++){
        deque.pushback(array[i]);
    }
    console.log(deque.printqueue());

    var flag=true;
    while(deque.getsize()>1){
        var a=deque.popfront();
        var b=deque.popback();

        if(a!=b){
            flag=false;
        }
    }
    

    if(flag==true){
        console.log("String is palindrome")
    }
    else{
        console.log("string is not palindrome")
    }
    },
}