/* PROBLEM
Your phone shows its battery as a row of 5 bars. Each full bar represents 20% of charge. A bar only lights up when its whole 20% is reached.

Write a function battery_bars(percent) that returns the battery as a string: # for a lit bar, . for an empty one, all wrapped in square brackets.

Examples
battery_bars(100)  # => "[#####]"
battery_bars(70)   # => "[###..]"
battery_bars(20)   # => "[#....]"
battery_bars(19)   # => "[.....]"
battery_bars(0)    # => "[.....]"
*/

/*PREP
Params: num from 0-100 representing a %
Return: a string "[##...]", every the # represents every factor of 20
Example: 70 => '[###..]'
PSEUDOCODE:
- declare a variable = empty string
- write a set of if conditionals that will push to the empty string 
*/
//MY SOLUTION
function batteryBars(percent) {
  if(percent < 20){
    return '[.....]'
  }else if(percent >= 20 && percent < 40){
    return '[#....]'
  }else if(percent >=40 && percent < 60){
    return '[##...]'
  }else if(percent >= 60 && percent < 80){
    return '[###..]'
  }else if(percent >= 80 && percent < 100){
    return '[####.]'
  }else{
    return '[#####]'
  }
}
