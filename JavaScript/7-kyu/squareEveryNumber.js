/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 7^2 is 49, 6^2 is 36, and 5^2 is 25. (49-36-25)

Note: The function accepts a non-negative integer and returns an integer.



Happy Coding!

*/
/*
PREP:
Params: take in a non-negative number
Return: Returns a number
Examples: 9119 = (811181), the square of ever digit in argument 
Prep: 
- first: create an empty string and call it 'result'
- second: turn num argument into a string 
- third: run a for loop so it performs an action on every char of the new string
- fourth: set the empty result variable to equal itself an concatonate the stringified version of every index of the characters in the newly created string to the power of 2. 
- fifth return the result as a number 
 */

//My solution
function squareDigits(num){
  let result = "";
  num = num.toString();
  for (let i = 0; i < num.length; i++){
    result = result + (num[i] ** 2).toString();
  }
  return Number(result);
}
