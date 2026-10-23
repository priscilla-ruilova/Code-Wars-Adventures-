/* 
PROBLEM:
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]
Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]
All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/

/*
PREP 
Params: we take in an array of strings, all strings are of different lengths
Return: we are returning an array strings, reordered from shortest string to longest string in terms of chars
Example: argument -> ["one", "fifteen", "three"] result -> ["one", "three", "fifteen"]
Pseudocode: sort the array -> callback function -> params: takes in a,b => and returns a.length - b.length/ This 
This order would ensure that the returning array is in accending order. 
*/

function sortByLength (array) {
  
  return array.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["priscilla", "su", "malcolm"]))
