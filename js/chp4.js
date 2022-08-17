// 8/17/22\

//-----------NUMBERS-------------

// Integer is a whole number, a number with a decimal is a 'float' which is referenced the "floating point"

const myNumber = 18;
console.log(myNumber);

const myFloat = 17.18;
console.log(myFloat);

//We can change a 'string' to a 'number' by using the number function - Number()

const myString = "24";
console.log(Number(myString));

// !! Zero is ALWAYS equal to false in Numbers!

//------Number Methods-------

// The Number.isInteger() method determines whether the passed value is an integer.
console.log(Number.isInteger(myFloat));

// The Number.parseFloat() method parses an argument and returns a floating Number. If a number cannot be parsed from the argument, it returns NaN.
console.log(Number.parseFloat(myFloat));

//!! When parsing, this method removes non numeric characters and converts other data types to the numeric data type!

//The toFixed() method formats a number according to how many decimal points you provide as the parameter.
console.log(Number.parseFloat(myFloat).toFixed(1));

