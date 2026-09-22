/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

//My solution:
function validatePIN (pin) {
  if (pin.length === 4 || pin.length === 6){ //logic expresses: so long as the length of the string that is pin is equal to 4 or 6 (in both value and data type, then!)
    return /^[0-9]+$/.test(pin) //return the literal notation of the object we're creating with RegExp so long as the pin value is s truthy statement as comapred to the logic preceeding it //The logic of RegExp is created by writing code within the /  /. This one expresses that the pin is a whole number between 0-9 and is checked against the code in line 3. 
  }else{
    return false
  }  
}

//My solution w/out notes:
function validatePIN (pin) {
  if (pin.length === 4 || pin.length === 6){
    return /^[0-9]+$/.test(pin) 
  }else{
    return false
  }  
}

//Alt solution not using RegExp:
function validatePIN (pin) {
	var n = pin.length;
  if( n != 4 && n != 6)
  		return false;
  for (var i in pin)
  		if (pin[i] > '9' || pin[i] < '0')
      		return false;
  return true;
}