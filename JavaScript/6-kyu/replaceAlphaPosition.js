/*
PROBLEM: 
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 2
*/

/*
PREP
- Params: We are given a string of text as a parameter. It can hold mutiple words, spaces, and symbols
- Return: We will only pay attention to the individual letters and ignore all other chars
- Return: We will return a string of numbers that correspond with the character's number in the alphabet 
- Exampl: for example: 'fall' = '6 1 12'
Pseudocode: 
- we take in the letters and turn it into an array of characters
---- every character has a built-in character code but we are not being case sensitive
- we convert the new array into numbers based on an alphabet system 
- we then turn the array of numbers into a string! 

AKA

- Convert all letters to lowercase.
- Split the string into individual characters.
- Keep only letters from a to z.
- Convert each letter to its alphabet position.
-Join the numbers into one string separated by spaces.
*/

//MY SOLUTION 
function alphabetPosition(text) {
  const result = []; //create an empty array 
  
  for (let char of text.toLowerCase()) { //loops through ever char of the text that we've turned into lowercase 
    const code = char.charCodeAt(0); //this identifies the char at the 0 index with it's UTF-16 code.
    if (code >= 97 && code <= 122) { // // This checks if the character code falls between 'a' (97) and 'z' (122)
      result.push(code - 96); //then we will push the representative char code into the array 
    }
  }
  
  return result.join(' '); //finally we return the joined result
}

//ALT SOLUTION ONE - FAVE
function alphabetPosition(text) {
  return text
    .toLowerCase()//converts letters to all lowercase
    .split('')// splits the text into an array by char
    .filter(char => char >= 'a' && char <= 'z') //for every char in the newly made array, filter out the chars don't meet the condition of being between a through z. Lowercase matters here since there are so many unicode numbers to things. This method keeps only the letters a-z.
    .map(char => char.charCodeAt(0) - 96) //Why subtract 96? Because the character code for a is 97, but we want its alphabet position to be 1. So: 97 - 96 // 1 ; 98 - 96 //2 ; 99 - 96 // 3
    .join(' '); //converts it back into a string
}
//ALT SOLUTION TWO 
function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let char = ""
    let arr = []
    let arrayText = text.split('')
    for(let i = 0; i < arrayText.length; i++){
        char = text.charAt(i).toLowerCase();
        if(alphabet.indexOf(chari) > -1){
            arr.push(alphabet.indexOf(chari)+1);
        }
    }
    return arr.join(' ');
  }