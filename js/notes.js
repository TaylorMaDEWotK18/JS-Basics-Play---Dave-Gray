// 8/16/22
// 4 Different Data Types

// #1-String
console.log(typeof "TaylorMade");

// #2-Numbers
console.log(typeof 18);

// #3-Boolean
console.log(18 + 2 === 21);

// #4-undefined
var undef;
console.log(undef);

// ----Strings----
const mathVariable = "Mathematics";

// The length property
console.log(mathVariable.length);

// String Methods
// --------------------

// charAt()-This method allows us to see which postion the character is in the string - index positioning
console.log(mathVariable.charAt(6));

// indexOf()-This method returns the position of the first occurrence of a value in a string
console.log(mathVariable.indexOf('th'));
// lastIndexOf()-is identical only returning the position of the 'last' occurance of the value
console.log(mathVariable.lastIndexOf('t'));

// slice()-this method returns the starting through the ending characters, slices them right out!
console.log(mathVariable.slice(2, 6));

// includes()-returns a boolean on whether string 'includes' value or not
console.log(mathVariable.includes('ath'));

// split()-method splits a string into an array of substrings. Whatever character for the value is NOT included in the resulting substrings
console.log("This page is coming out great!".split(" "));
console.log('Cecil, Kain, Rydia, Edgar, Tellor'.split(", "));