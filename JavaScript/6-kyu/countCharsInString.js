/*
PROBLEM:
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/
/*
PREP
Params: a string of characters. Can also be empty. can it have spaces? Unclear.
Return: an object literal with the number of characters for each string
Example: string = abcabca. Return = {a:3, b:2 , c:2}
Pseudocode: 
1) We can start by creating an empty obj 
2) We can iterate over the string to count the number of characters using a for...of loop
2) We can check if an occurance of a char is present and increment by 1 if yes.
3) Lastly, we return the new obj
Notes: The || operator returns the left side if it's truthy, otherwise the right side. Since undefined is falsy, the first time through this evaluates to 0. On later encounters, the existing number (say 1, 2, …) is truthy, so it stays as-is.

//So this expression means: "the current count, or 0 if there isn't one yet."
*/
//MY SOLUTION
function count(string) {
const charObject = {}
for(const char of string){
  charObject[char] = (charObject[char] || 0) + 1;
}
  return charObject;
} 

//Line 22 exp: The || operator returns the left side if it's truthy, otherwise the right side. Since undefined is falsy, the first time through this evaluates to 0. On later encounters, the existing number (say 1, 2, …) is truthy, so it stays as-is.

//So this expression means: "the current count, or 0 if there isn't one yet."