/*PROBLEM
You have to create a method "compoundArray" which should take as input two int arrays of different length and return one int array with numbers of both arrays shuffled one by one.

Input - {1,2,3,4,5,6} and {9,8,7,6} 
Output - {1,9,2,8,3,7,4,6,5,6}*/

/*PREP
Params: two arrays of different lengths (a and b) each made up of integers...unclear if they can be negative or not.
Return: one array with shuffled or randomized elements made up of the combined param arrays
Example: {1,2,3} and {4,5,6} => {46132}
Psuedocode: 
1) we want to create a resulting array so we name a new variable
2) we need to loop through the total elements out of two different arrays so we can get the length of the longer array by using Math.max() and share the lengths of the two arrays to get the length of the loop we want. Using the longer length means the loop keeps going after the shorter array runs out, so the leftover elements of the longer array still get added.
3) we add two conditionals to push all elements into the resulting array
4) we return the final array
5) NOTE: it's not shuffling..it's interleaving => a[0], b[0], a[1], b[1], a[2], b[2] etc...
*/

function compoundArray(a, b) {
    let arr = [];
    let length = Math.max(a.length, b.length)
    for (let i = 0; i < length; i++) {
        if (i < a.length) { //this is pushing all elements in array a into arr
            arr.push(a[i]);
        }
        if (i < b.length) { //this is pushing all elements in array b into arr
            arr.push(b[i])
        }
    }
    return arr
}
