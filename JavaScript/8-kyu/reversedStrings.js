/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

function solution(str){}
*/

//My solution 
function solution(str){
  let splitStr = str.split("") //This method splits the string based on its separator which in this case is splitting all the chars and creating an array
  let reverseArray = splitStr.reverse() //This method takes in an array and reverses it
  let reversedString = reverseArray.join("") //This method takes an array and joins it together into a string
  return reversedString
}
