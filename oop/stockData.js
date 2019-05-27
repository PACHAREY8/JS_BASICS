module.exports=
{
stockCheck(object)
  {

      /* creating object of json file contain info about stock
       */
    var stock=object.Stock;

      /* making for in loop for stock
       */
    for(key in stock)
    {

        /* Displaying Each element from stock using key
         */
        console.log("Stock name is : " +stock[key].stock_name);
        console.log("No of stock : "+stock[key].share_num);
        console.log("Rate of share : "+stock[key].Share_price)

          /* calculating and printing total share */
        console.log("total share : "+stock[key].share_num+"of stock name"+stock[key].stock_name
        +"is : "+stock[key].share_num*stock[key].Share_price); 
        console.log();

         
    }

    /* returning total stock
     */
    return stock;

  }

}