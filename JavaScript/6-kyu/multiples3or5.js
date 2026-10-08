/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If a number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)

*/

//My solution: 
function solution(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) { //start at 1 to 
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
    } return sum
}

// we have take in any number that creates an array of numbers from 0 to number 
// next we loop through the array to identify which numbers are multiples of 3 or 5 and return those numbers
// we then add all those numbers together except for those that are a multiple of BOTH 3 & 5
// finally we return the sum of all the numbers'function solution(number) {
// Base case: return 0 if the number is negative