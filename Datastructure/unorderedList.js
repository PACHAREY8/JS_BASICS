
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
 
  add(element) {
       var Nnode = new Node(element);
    
        var current; 
        if (this.head == null){
            this.head = Nnode;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }   
            current.next = Nnode;
        }
    }
    
    insertAt(element, index) {
        if (index > 0 && index > this.size){
      
      
            return false;
        }
        else {    
            var Nnode = new Node(element);
            var current, previous;
            current = this.head;
            
        if (index == 0) {
            Nnode.next = head;
            this.head = Nnode;
        }
        else {
            current = this.head;
            var iteration = 0; 
            while (iteration < index) {
                iteration++;
                previous = current;
                current = current.next;
            }
    
            Nnode.next = current;
            previous.next = Nnode;
        }
    }
    }
    
removeElement(element) {
    var current = this.head;
    var previous = null;
    while (current != null) {
        if (current.element === element) {
            if (previous == null) {
                this.head = current.next;
            } 
            else {
                previous.next = current.next;
            }
            return current.element;
        }
        previous = current;
        current = current.next;
    }
    return -1;
    }
indexOf(element) {
        var count = 0;
        var current = this.head;
        while (current != null) {      
            if (current.element === element){
                return count;
            }
            count++;
            current = current.next;
        }
    
        return -1;
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
        var string = "";
        while (current) {
            string += current.element+" ";
            current = current.next;
        }
        console.log(string);
        return string;
    }
}



//open file 
fileSystem = require('fs');

module.exports = {
    unorderedList(array, element) {
       
        //create a new list
        
        var list = new Linkedlist();
        for (var i = 0; i < array.length; i++) {
            list.add(array[i]);
        }  
    
    // This condition checks for adding the item,if item not exists in file
     
        if (list.indexOf(element) == -1) {
            list.add(element);
            console.log("Added successfully..");
        }
        
        // This condition checks for removing the item,if item already exists in file
       
        else {
            list.removeElement(element);
            console.log("Removed successfully....");
        }  
      
         //write operation to save updated list into the file.
       
        var dataWrite=list.printList();
        fileSystem.writeFileSync('../Datastructure/Output.txt',dataWrite); 
    }
}
