const lpath=require('../oop/cardsLinkedlist')
const read=require('readline-sync');
const ppath=require('../oop/listdeckofcards');
function Player()
{
    var list=new lpath.Linkedlist;
   list.printList(ppath.cardsDistribution());
  // list.printList();
    

}
module.exports=Player();


 