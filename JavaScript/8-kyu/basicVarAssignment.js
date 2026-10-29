/*
PROBLEM:
This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?
*/

//ORIGINAL CODE:
var a == "code";
var b == "wa.rs";
var name == a + b;

//MY SOLUTION: 
let a = "code";
let b = "wa.rs";
let name = a + b;

//They were using a comparator function instead of assigning variables. The double equal sign should be single. 