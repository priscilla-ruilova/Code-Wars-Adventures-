/*
Problem: 
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

//My solution:
function addBinary(a,b) {
  //return a+ b in binary aka a + b in base two
  //decimal nuber system is base 10
  let sum = a + b //add first
  return(sum.toString(2)) //convert the sum to a string with a radix of 2 which returns the binary since it is base 2
}