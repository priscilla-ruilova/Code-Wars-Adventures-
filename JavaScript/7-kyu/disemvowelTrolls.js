/*
PROBLEM: Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

PSEUDOCODE:

- I want to take in a string and turn it into an array of characters
- consider how case senitivity matters in this context
- I can filter out all the nonvowels to return a new array of nonvowels
- lastly, I can joing together this new array to turn it back into a string and then return the string
- return str;

*/

//MY SOLUTION
function disemvowel(str) {
  const vowels = 'aeiou'; //create a variable that includes all vowels 
  return str
    .split('') //returns an array of characters
    .filter(letter => !vowels.includes(letter.toLowerCase())) //filters through array and returns non vowels that are all set to lower case
    .join(''); //joins together 
}
