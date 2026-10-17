/*
PROBLEM:
You get a new job working for Eggman Movers. Your first task is to write a method that will allow the admin staff to enter a person’s name and return what that person's role is in the company.

You will be given an array of object literals holding the current employees of the company. You code must find the employee with the matching firstName and lastName and then return the role for that employee or if no employee is not found it should return "Does not work here!"

The array is preloaded and can be referenced using the variable employees ($employees in Ruby). It uses the following structure.

let employees = [ {firstName: "Dipper", lastName: "Pines", role: "Boss"}, ...... ]
There are no duplicate names in the array and the name passed in will be a single string with a space between the first and last name i.e. Jane Doe or just a name.
*/
/* 
PSEUDOCODE: 
/*
PREP
Parameters: String in the form of "firstName lastName". String will have a space between 
or just a name
Response: will be the job role pulled from the correct object literal based on the input. No dublicate names.
Examples: if the input is: "Dipper Pines", then the result will be the role of: "Boss. 
Pseudocode: 
1) split the string by space
2) create two variables to represent the two keys we're targetting as inputs. Use array destructuring
3) compare it to the matching object literals through a loop. To reach the employee first name, we target: employees[i].firstName etc.
5) We can use an if conditionals to compare the first name && last name;
6) make sure we account for the names not matching as well 
*/
//MY SOLUTION - splits name into two variabled:
function findEmployeesRole(name){
  const [firstName , lastName] = name.split(" ");
  for(let i = 0; i < employees.length; i++){
    if(employees[i].firstName === firstName && employees[i].lastName === lastName){
      return employees[i].role
    }
  } return "Does not work here!" 
}
//ALT SOLUTION - uses concatination to do a one liner and does NOT change the name: 
function findEmployeesRole(name) {
  for(var i = 0; i < employees.length; i++)
    if(name === employees[i].firstName + " " + employees[i].lastName) return employees[i].role;
  return "Does not work here!";
}