/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
/*PREP
Params: a string of letters that are lowercase. Spaces are included. 
Return: return the number of vowels that exist in any given string but only include (a,e,i,o,u) not y
Example: "apple" => 2
Pseudocode: 
- first create the return variable in the form of a number 
- name the vowels as a variable
- use a loop to loop through every character and apply a condition to each character
- create an action that applies to each char and adds to the variable we created for the return 
*/

//My solution: 
function getCount(str) {
  let vowelsCount = 0 //this is our return and the 'counter' starts at 0, then goes up by condition set
  const vowels = ['a', 'e', 'i', 'o', 'u'] //name the vowels are looking for
  for (let char of str){ //use a for of loop to loop through every char of the string 
    if (vowels.includes(char)){ //conditional that asks: "is this character somewhere in my list?" It returns true or false. then does the following action 
      vowelsCount++ //If above is true, vowelsCount++ adds one to the counter. ++ is shorthand for vowelsCount = vowelsCount + 1.
    }
  }
  return vowelsCount
}
