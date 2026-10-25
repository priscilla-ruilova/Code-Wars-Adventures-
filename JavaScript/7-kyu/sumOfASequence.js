/*
PROBLEM
Your task is to write a function which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
*/
/*
PREP:
Params: 3 non-negative integers! The first argument is the starting integer, the second argument is the ending argument, the third argument is by how many integers you should count
Return: sum of the integers as defined by the pattern above
Example: 2,6,2 --> 12 (2 + 4 + 6)

PSEUDOCODE

- we take in three non-negative integers as arguments
- the begin parameter is the starting number
- the end parameter is the ending number
- the step parameter is by how much you will count between the starting and ending number

- we need to return the sum from begin to end, counting by step
- if the begin value if greater than the end value, function will return 0
- if the end value is NOT a result of an integer number of steps, then don't add it to the sum.
*/

//My Solution 
const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0 //write a conditional to meet the condition in problem. If the begin integer is higher than the end integer, return 0.
  let sum = 0 //create a sum variable that we will return 
  for (let i = begin; i <= end; i += step){ //run a loop given the problem conditions: i = begin instead of 0; i <= end instead of the length of a named argument; instead of i ++, i goes up by step so we write i += step
    sum += i //the sume is equal to i since it is looped 
  }
  return sum
 }
