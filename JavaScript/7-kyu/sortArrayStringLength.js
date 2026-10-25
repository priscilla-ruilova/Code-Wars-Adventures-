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
  
  return array.sort((a, b) => a.length - b.length); //return the difference in lengths, and the sign of that number (+, -) tells the comparator function what element should come before the other. Comparator function is called over and over, on whatever pairs the sort algorithm decides to compare. Order does not matter. Each call is independent. Don't think of the comparator as "checking the array." Think of it as "being asked a question, many times, about pairs the sort algorithm picks." It will make sure to compare all the options and then guage the order.
}

