//Problem: Implement a function which convert the given boolean value into its string representation. Note: Only valid inputs will be given.

//My Solution:
function booleanToString(b){
  if (b === true){
    return true.toString()
  }else if(b === false){
    return false.toString()
  } 
}
//After sumbitting, the following alt solution is muuuuch cleaner:

function booleanToString(b){
  return String(b);
}
