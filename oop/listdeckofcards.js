module.exports=
{
    deckfCards()
    {
        var suit=["Clubs", "Diamonds", "Hearts", "Spades"];
        var Rank=["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
        var n=suit.length*Rank.length;
        var cards=[];
       
        for(var i=0;i<suit.length;i++)
           {
               for(var j=0;j<Rank.length;j++)
                    {
                       cards.push(" "+suit[i]+"-"+Rank[j]);
                    }
            }
         
        var temp;
        for(var i=0;i<n;i++)
           {
                var shuffle=Math.floor(Math.random()*n);
                temp=cards[shuffle];
                cards[shuffle]=cards[i];
                cards[i]=temp;
            }
         console.log("Total number of cards are : \n "+cards)
         

         for(var i=0;i<Rank.length;i++)
         {
             for(var j=i+1;j<Rank.length;j++)
             
                 if(Rank[i]>Rank[j]){
                    var temp=Rank[i];
                    Rank[i]=Rank[j];
                    Rank[j]=temp;

                 }
                 
         }
      return cards;
      



    },

    cardsDistribution()
    {
        var cards=this.deckfCards();
        var player=0;
        var personCards=[[],[],[],[]];
       
        for(var p=0;p<4;p++)
        {
            for(var q=0;q<9;q++)
            {
                personCards[p][q]=cards[ q + player];
               
            }
            player=Math.floor(Math.random()*cards.length-1);
         
        }
        for(var i=0;i<personCards.length;i++)
        {
            for(var j=i+1;j<personCards.length;j++){
                if(personCards[i]>personCards[j]){
                    var temp=personCards[i];
                    personCards[i]=personCards[j];
                    personCards[j]=temp
                }
               
            }
         
        }
        
        console.log (personCards);

    }


}

    