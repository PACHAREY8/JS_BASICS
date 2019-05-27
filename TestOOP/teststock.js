/* importing assert and chai
 */
const assert=require('chai').assert;
const fs=require('fs');

/* reading json file
 */
var data=fs.readFileSync('../oop/StockData.json');

/* parsing json string
 */
var stock=JSON.parse(data);

/* Description about testing
 */
describe("stock input Data Check",function(){
    it("Stock Name Should of string type",function(){

        /* checking for stock_name is string  */
        for(var i=0;i<stock.Stock.stock_name;i++)
        {
            var arr=stock.Stock[i].stock_name;
            assert.isString(arr)
        }
    });

    it("Share_price should be a number",function(){

        /* checking for share_price is number
         */
        for(var i=0;i<stock.Stock.Share_price;i++)
        {
            var arr=stock.Stock[i].Share_price;
            assert.isNumber(arr)
        }
    })

});