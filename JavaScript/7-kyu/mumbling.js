/*PROBLEM:
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/
/* PREP:
Params - turn string into an array 
Return - we will get back a string of characters--letters and dashes (-). return each letter repeated n times based on it’s position in the string.
Example - "Uncle" => "U-Nn-Ccc-Llll-Eeeee"
Pseudocode:
- First, create new array variable to push into array 
- Second, loop over array passing the current character and its position 
(index + 1, because index starts at 0). Use a helper function for this
- Third, return arr.join('-')
- Fourth, create helper function that takes in the index and the number (how many times it will appear)
- Fifth, helper function starts with the uppercase version of the letter, then use a while loop: as long as
  the current string isn't long enough, append the lowercase version
- Last, going back to the main function, it returns the helper function logic into the new arr we created []
*/
//MY SOLUTION
function accum(s) {
    let arr = [] //name new array variable
    for (let i = 0; i < s.length; i++) { //loop through string (s)
        arr.push(format(s[i], i + 1)) //push to the new array the result of the helper function format()
    }
    return arr.join('-') //return the arr joined into a string by a dash
}
function format(s, num) { // helper function takes in the string and a number (num of times a char shows up). Its purpose is to return a chuck of repeated letters
    let letter = s.toUpperCase() //new variable showing the s string as all upppercase
    while (letter.length !== num) { //while loop that so long as the length of upper case string is not equal to the number 
        letter += s.toLowerCase() //then it will add the same string (s) as the lower case version 
    }
    return letter //returns letter
}

//ALT SOLUTION 
function accum(s) {
    return s
        .split("") //splits the array by char
        .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)) //callback fun that takes in the current char and it's index (i). It returns the first c in uppercase plus the following versions of c in lowercase repeated by the number of its index
        .join("-"); //array is joing by (-) into one big string 
}
