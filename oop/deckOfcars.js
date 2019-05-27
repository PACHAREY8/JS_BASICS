module.exports=
{
    
    deckfCards()
    {
        /* first array for suit 
        */
        var suit=["Clubs", "Diamonds", "Hearts", "Spades"];

        /*  array for Rank
        */
        var Rank=["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

        /* defining total pair of suit*rank cards
         */
        var n=suit.length*Rank.length;
        var cards=[];

        /* Defining the two for loops for suit and rank 
        and then pushing it into the new array called cards
        */
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

                  /* making the random shuffle of suit and rank
                    */
                var shuffle=Math.floor(Math.random()*n);
                temp=cards[shuffle];
                cards[shuffle]=cards[i];
                cards[i]=temp;
            }
         console.log("Total number of cards are : \n "+cards)
         /*  returning the shuffled data
         */
         return cards;

    },

    cardsDistribution()
    {

        /* importing the function deckofCards into a variable
         */
        var cards=this.deckfCards();
        var player=0;

        /* making an array
         */
        var personCards=[[],[],[],[]];
        for(var p=0;p<4;p++)
        {
            for(var q=0;q<9;q++)
            {
                personCards[p][q]=cards[ q + player];
               
            }
            /* take random card length
             */
            player=Math.floor(Math.random()*cards.length-1);
         
        }
          /* print cards for four person 
           */
        console.log( "\n Cards Distributed amongst four people are : \n")
        console.log("the first players cards is : \n"+"[" + personCards[0] +"]");
        console.log();
        console.log("the second players cards is : \n"+"[" + personCards[1] + "]");
        console.log();
        console.log("the third players cards is : \n"+"[" + personCards[2] + "]");
        console.log();
        console.log("the fourth players cards is : \n"+"[" + personCards[3] + "]");

        
    }


}

    