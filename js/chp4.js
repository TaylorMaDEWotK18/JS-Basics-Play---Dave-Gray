// 8/17/22\

//-----------NUMBERS-------------

const myNumber = 18;
const myFloat = 17.18;
const myString = "24sdfsdf";

// Integer is a whole number, a number with a decimal is a 'float' which is referenced the "floating point"

console.log(myNumber);

console.log(myFloat);

//We can change a 'string' to a 'number' by using the number function - Number()

console.log(Number(myString));

// !! Zero is ALWAYS equal to false in Numbers!

//------Number Methods-------

// The Number.isInteger() method determines whether the passed value is an integer.
console.log(Number.isInteger(myFloat));

//      ----------------------------------

// The Number.parseFloat() method parses an argument and returns a floating Number. If a number cannot be parsed from the argument, it returns NaN.
console.log(Number.parseFloat(myFloat));

// Number.parseInt() parses a string and returns an integer
console.log(Number.parseInt(myString));

//!! When parsing, this method removes non numeric characters and converts other data types to the numeric data type!

//      -----------------------------------

//The toFixed() method formats a number according to how many decimal points you provide as the parameter.
console.log(Number.parseFloat(myFloat).toFixed(1));

//The toString() method returns a string representing the number, which you can verify as string data by using the 'typeOf' keyword.
console.log(myFloat.toString());
console.log(typeof myNumber.toString());

//Verified the same with converting a string to a number - typeOf is POWERFUL!
console.log(typeof Number.parseInt(myString));

//------------CHAINING--------------

//THIS IS VERY COMMON PRACTICE! Chaining = Using several methods chained together
console.log(Number.parseFloat("42.2545avd").toFixed(3).toString());
//This is just an example of chaining, 'toFixed' already returns a string so 'toString' is not necessary 