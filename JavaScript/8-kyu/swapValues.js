/* PROBLEM:
I would like to be able to pass an array with two elements to my function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?
*/
//ORIGINAL SOLUTION
function swapValues() {
    const args = [...arguments];
    const temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}

//MY SOLUTION: 
function swapValues(args) {
    const temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}