function calendarCheck() {

    try {
        let cpath = require('../Datastructure/calender');
        // take month
        var read = require('readline-sync');
        let month = read.question("Enter the month");
        if (isNaN(month)) {
            console.log("Enter valid month");
        }

        // take year
        let year = read.question("Enter the year");
        if (isNaN(year)) {
            console.log("Enter valid year");
        }

        cpath.calender(month, year);
        var arr = [];
        arr.push(month);
        arr.push(year);
        return arr;

    }
    catch (err) {
        console.log(err)
    }
}
module.exports = calendarCheck();