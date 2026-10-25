/*
PROBLEM:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

PREP:
Params: a string of words, unsure about case sensitivity, there are no spaces
Return: a word in the string of words that is the shortest in length 
Example: "I love rock and roll forever" return "I"
Psuedcode: 
1) ensuring all words are lowercase and then converting the string of words into an array of words
let arr = s.toLowerCase().split(" ") 
2) loop throught the new array 
3) if condition: arr[i].length < shorty
4) return the arr[i].length
*/

//MY SOLUTION:
function findShort(s){
  const arr = s.split(" "); //begin by spliting string into an array 
  let shorty = arr[0].length; //name variable of shorty to = the length of the first indexed element 
  
  for (let i = 0; i < arr.length; i++ ){ //run a for loop to loop through every element of the array
    if (arr[i].length < shorty){
      shorty = arr[i].length //this conditional says: if the iterated element is less than the length of the first-indexed element, then it becomes the new variable, ensuring the indexed element of the array is the shortest in length 
    };
  }return shorty;
}