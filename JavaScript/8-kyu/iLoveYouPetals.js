/* PROBLEM
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.
*/
/* PREP
Params: number > 0
Return: the correct phrase (1 of 6)
Example: say nbPetals = 3 then, return = 'a lot'
Example: say nbPetals = 10 then, return = 'pasionately'
Pseudocode: 
- we have to create an array with the 6 phrases and name it as a variable
- next we have to access the array elements by looping through them based on their index.
- We can do this by creating logic to locate the correct index based on the number parameter
- in this case, we can return the collection of arrays based on what the num of petals - 1 results too. We can 
minus 1 because we are looking for the correct index and if we don't - 1, it'll name the element at the [1] 
index as 'a little' instead of 'I love you'.
- We can use the modulus (%) to make the result of the param continue to name phrases in the array even if they're
above 6. 
*/
//MY SOLUTION

function howMuchILoveYou(nbPetals) {
let phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
return phrases[(nbPetals - 1) % 6]
}
