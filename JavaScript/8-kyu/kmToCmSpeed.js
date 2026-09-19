/*
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
*/

//My solution
function cockroachSpeed(s) {
  let cm = s * 100000/3600 //I got this from looking up the math to convert km to cm
  return Math.floor(cm)
}

//Alt Solution
function cockroachSpeed(s) {
  return Math.floor(s*100000/3600); //no need to create a new variable 
}