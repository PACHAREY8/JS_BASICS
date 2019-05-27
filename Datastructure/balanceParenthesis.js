function balancedParenthesis() {
    var balancedPara = require('../Datastructure/balance');
    
        try{
        var read = require('readline-sync');
        var expression=read.question('Enter the expression')
         //if expression is null then print an error message.
            if (expression =="") {
                console.log("plz enter an expression");
             
            } 
        //if expression is not null then get output  
            else(expression !="")
            {
                balancedPara.balancedParenthesis(expression);
            }
        
        // for testing
            return expression;
        }
        catch(err){
            console.log("error");
    
        }
            
    }
    
    module.exports=balancedParenthesis();