
class Node
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}
 
class StackedLink{
    constructor(){
        this.top = null;
    }
 
   
    push(item){
         var Nnode = new Node(item);
         Nnode.next = this.top;
         this.top = Nnode;
    } 
    
    pop(){
        if(this.top == null){
            console.log("Stack Underflow");
            return;
        }
        this.top = this.top.next;
    }
    
    isEmpty(){
        return this.top == null;
    }
    
    
    peek(){
        if(!this.isEmpty()){
            return this.top.data;
        }else{
            console.log("stack is empty");
            return -1;
        }
    }
    
    display(){
        if (this.top == null) { 
            console.log("Stack Underflow"); 
            return;
        } 
        else { 
            var temp = this.top; 
            var show = "";
            while (temp != null) {  
                show = show + temp.data;
                if(temp.next!=null){
                    show = show + " --> "
                }              
                temp = temp.next; 
            } 
            console.log(show);
        } 
        return show.length;
    }
    
    
    reverse(){
        var prev = null;
        var current = this.top ;
        var next = null;
        while(current!= null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.top = prev;
    }
    
    
    dispReverse(top){
        if(top == null)
            return;
        this.dispReverse(top.next);
    
        if(top.next!=top)
        console.log(top.data+" --> ");
        
        this.top=this.top.next;
    }


    getHead(){
        return this.top;
    }
}

module.exports=
{
    StackedLink
}
