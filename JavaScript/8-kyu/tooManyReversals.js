/*PROBLEM: 
You are an up and coming commentator in the brutal world of pro wrestling. However, you suck at telling who reversed the reversal.

You will be provided with a string in the format of : "X hit a reversal to Y hit a reversal to X...... hit a reversal to (X/Y)"

Rules:

•The string starts and ends with the respective names of the wrestlers (Not necessary that the starting and ending names be the same).

•Input will always be validated.

•X and Y will either be letters or single words.

Determine and return the victor of the match.

Be careful. Your job is on the line!
 */

/*PREP:
Params: take in a string that has letters or words for the X and Y variables
Response: We will get back the same string and then return the winning wrestler name which is different than the previously named wrestler.
Example: The main idea is to remove all the words that aren't wrestler names, then return the second-to-last wrestler in the remaining list. So for example: ('Priscilla hit a reversal to Jong hit a reversal to Priscilla hit a reversal to Jong', 'Priscilla')
Pseudocode: 
- first I'll turn the string into an array using .split()
- then I'll take away the repeating words that are not wrestler names but putting them all into a variable
- then I'll use the .filter() method to filter out the repeating filler words I named in the above variable. The .filter() method examines each element in an array and creates a new array containing only the elements that pass a test.
- then I'll be left with just wrestler names and I can find the second to last wrestler name (winner) by subtracting -2 from the total length of wrestler names
*/
//SOLUTION:
function whowon(s) {
  const arr = s.split(" ");
  const ignoredWords = ["hit", "a", "reversal", "to"];
  const wrestlers = arr.filter(function (word) { //this changes the array to only container wrestler names without the filler words
    return !ignoredWords.includes(word); //This line of code says keep this word only if it is NOT one of the ignored words.
  });
  return wrestlers[wrestlers.length - 2]; //The winner is the second-to-last element.
}
