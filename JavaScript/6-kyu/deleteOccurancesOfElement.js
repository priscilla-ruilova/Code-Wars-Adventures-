/*PROBLEM:
Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].
*/

/*PSEUDOCODE:
-take in two params: an array and a 'n' -> a number that limits # of elements 
-returns a new list in the form of an object
-we have to check the entire param array to see if it has more than 'n' times of an elements
-We have to remove the elements that occur more than 'n' amount of times in array 

-we first create a new obj since elements and how many times they show up can be placed in an object
-we then filter out the elements by first addressing our edge case: 
  - if a new element exists, count it as 1 occurance or if we have already counted it, add by 1
  - then finally return the elements found in the object so long as they show up less than or equal to 'n' times
*/

//My Solution: 
function deleteNth(arr,n){
  let newObj ={};
  return arr.filter(num => { 
    (newObj[num]) ? newObj[num]++ : newObj[num] = 1
    return newObj[num] <= n
  })
}