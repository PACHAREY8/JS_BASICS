

  class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
           }


 class Linkedlist{
    constructor(){
        this.head=null;
        
    }
 
     pushback(element) {
       var Nnode = new Node(element);
    
        var current; 
        if (this.head == null){
            this.head = Nnode;
        }
            current = this.head;

            while (current.next!=null) {
                current = current.next;
            }   
            current.next = Nnode;
            return this.head
        
    }
    
    popFront () {
    if (this.head==null)
    {
        this.head=null;
    }
    this.head=this.head.next;
    return this.head;
   
    }

    isEmpty() {
        return this.size == 0;
    }


    sizeOflist() {
        return this.size;
    }
    printList() {
      
         //print the given list after performing changes.
        var current = this.head;
        var num;
        while (current) {
           num+=current.element+" ";
            current = current.next;
        }
     console.log(" "+num)
    }
    
    
    
}
module.exports=
{
Linkedlist
}





