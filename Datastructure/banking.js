
   class queue
   {
   constructor(){
        this.number=new Array();
        //this.balance=balance;
   }
   
    popfront(){
        return this.number.shift();
    }
    pushback (amount){
        return this.number.push(amount);
    }

    printqueue(){
        var str='';
        for(var i=0;i<this.number.length;i++){
            str=str+this.number[i];
        }
        return str;
    }
   } 
   module.exports={
       queue
   }

