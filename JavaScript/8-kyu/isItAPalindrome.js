// Problem: Write a function that checks if a given string (case insensitive) is a palindrome.

//A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

//My solution:
function isPalindrome(x) {
  
  let newX = x.toLowerCase();
  let result = newX.split("").reverse().join("");
  
  return newX == result
}


