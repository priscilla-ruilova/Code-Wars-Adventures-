/* 
PROBLEM: 
Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false if you do not. We only care about substrings that are longer than one character. Substrings are case-insensitive, e.g. "aB" and "Ab" should compare equal in this kata.

Examples:
"Something", "Fun"  ==> false
// because "something" and "fun" contain no common substrings
// (We do not count the 'n' as a substring in this Kata,
// because it is only 1 character long)
*/

/*
PREP 
Params: take in two strings, they may container upper and lowercase chars
Return: true if matching substrings greater than 2 chars exist. Otherwise,false. 
Example: say our two string arguments are: "Priscilla", "Jong". It would return false.
PSEUDOCODE: 
- first, we normalize the string arguments by using .toLowerCase() and naming new variables 
- second, we set check every 2-character chunk of string1 using the sliding window method!
- third, we check if string 2 has a matching substring that we created as a variable 
- return true and then false 
*/

function substringTest(str1, str2){
  let string1 = str1.toLowerCase();
  let string2 = str2.toLowerCase();
  
  for(let i = 0; i < string1.length - 1; i++){ //we use the -1 because if we want to run the below code we need to make sure the loop stops counting at one index before the last index. 
    const substring = string1.substring(i, i + 2); //substring(i, i + 2) means "give me the characters from index i up to, but not including, index i + 2" 
    if (string2.includes(substring)){
      return true
    }
  }return false
}
