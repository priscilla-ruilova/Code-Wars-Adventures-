// A CLASSIC 
/*Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]
*/

//My pseudocode:
// We take in a number > 0. Then we loop through an array of numbers from 1 - the number. 
// We check if any of these number is divisible by 3 or 5
// We use if conditionals to return the array abd replacing the value of the numbers with fizz if it's divisible by 3, buzz if divisible by 5, and fizzbuzz if divisible by both


//My solution: 
// Return an array
function fizzbuzz(n){
  let arr = [];
  for (i = 1; i <= n; i++){
    if (i % 3 === 0 && i % 5 === 0){
     arr.push("FizzBuzz")
    }else if (i % 3 === 0){
      arr.push("Fizz")
    }else if (i % 5 === 0){
      arr.push("Buzz")
    }else{
      arr.push(i)
    }
  }
  return arr
}