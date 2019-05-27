module.exports=
{
calender(month, year) {

    let util = require('util');
    let days = ["  sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    let monthdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let startday = this.DayOfWeek(month, 1, year);
    console.log(startday)
    // week days
    console.log(days[0] + "  " + days[1] + "  " + days[2] + "  " + days[3] + "  " + days[4] + "  " + days[5] + "  " + days[6]);

    var j;

    row = 0;
    var n = monthdays[month];

    util.print(" ")
    // print number of spaces till starting date
    for (j = 0; j <= startday * 5; j++) {
      util.print(" ");
    }
    for (let i = 1; i <= n; i++) {
      if (i < 10)
        // date is less than 10 print 
        util.print(" " + i + "   ");
      else {
        // if date is greater than 9
        util.print(" " + i + "  ");
      }

      if ((startday + i) % 7 == 0) {
        //for changing the line.
        console.log();
        util.print("  ");
      }
    }
    console.log("\n\n");


  },

  DayOfWeek(d, m, y) {
    var y0 = y - Math.floor((14 - m) / 12);
    var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
    if (m <= 12) {
      //calculating month of year using formula
      var m0 = m + 12 * Math.floor((14 - m) / 12) - 2;

      var d0 = (d + x + Math.floor((31 * m0) / 12)) % 7;
      return d0;


    }
    else {
      console.log("Invalid month")
    }
  }
  }