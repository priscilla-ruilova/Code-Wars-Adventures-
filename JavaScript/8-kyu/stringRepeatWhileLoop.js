//Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

//Solution:
function repeatStr (n, s) {
  let newString = ''
  while (n > 0){
    newString += s
    n--
  }
  return newString
}
console.log(3, 'Priscilla')//output = 'PriscillaPriscillaPriscilla'