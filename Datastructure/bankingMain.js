
    function transaction()
    {
        var bpath=require('../Datastructure/banking')
        var que=new bpath.queue;
        var balance=5000;
        var person=[10];
        const read =require('readline-sync');
        var amount=read.question("Enter amount you want to withdrawn");
        if(amount==null)
        {
            console.log("Enter valid amount ");
        }
        else if(amount<balance)
        {
            for(var i=0;i<person.length;i++)
            {
            balance=balance-amount;
            que.popfront();
            console.log("Account balance Rs. "+amount+ " is suucessfully Debited ")
            
            }
            console.log("Remaining Balance is : "+balance);
        }
       
        
        else if(amount>balance)
        {
            console.log("Balance running low ,Please Deposite some amount");
            var amount1=read.question("Deposite some amount");
            balance=-(-balance-amount1);
           console.log("Rs. "+amount1+" is successfully Credited into Your account")
           console.log("Total Available balance is : "+balance);
    
        }
       
     
        }
       
module.exports=transaction();