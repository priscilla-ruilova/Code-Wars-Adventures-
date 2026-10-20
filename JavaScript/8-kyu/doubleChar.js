/*
PROBLEM: 
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
- "String"      -> "SSttrriinngg"
- "Hello World" -> "HHeelllloo  WWoorrlldd"
- "1234!_ "     -> "11223344!!__  "
*/
/*
PREP
Params: take in a string 
Return: Same string but with one char repeated
Example: ["Hello"] => ["Hheelloo"]
Pseudocode:
- let's split the string into an array 
- let's loop through the string and add chars per letter with case sensitivity 
- we can use map with logic that for every element return + 1 element 
- join method to bring the string back 
*/

//MY SOLUTION:
function doubleChar(str) {
return str.split('').map((element) => element + element).join('')
}


//ALT SOLUTION: 
function doubleChar(str) {
  let res = '';
  for (let i in str) {
    res += str[i].repeat(2);
  }
  return res;
}