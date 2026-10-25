/* Problem: Write function which takes a string and make an acronym of it.

Rule of making acronym in this kata:

split string to words by space char
take every first letter from word in given string
uppercase it
join them toghether
Eg:

Code wars -> C, w -> C W -> CW
Note: There will be at least two words in the given string!

*/

//My solution: 
function toAcronym(str) {
  return str
    .split(' ') //split the string by a space character
    .map(word => word.charAt(0).toUpperCase()) //map through the words and call back function applies to each word where the character at index[0] is capitalized
    .join(''); //the capitalized letters at index[0] are joined together with no space between and returned.
}
