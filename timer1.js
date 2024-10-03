/*
For this app, we can think of at least these three:

No numbers are provided: Easy. It should just not beep at all
An input is a negative number: Ignore/skip any numbers that are negative
An input is not a number: Ignore/skip these
 */

const args = process.argv.slice(2);
const timer = function(args) {
  if (args.length === 0) {
    return;
  }
  for (let time of args) {
    if (time > 0 & !isNaN(time)) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, time * 1000); //at time(a number, eg: 7) seconds, make a sound
    }
  }
}

timer(args);

// node timer1.js 1 3 5 15 9