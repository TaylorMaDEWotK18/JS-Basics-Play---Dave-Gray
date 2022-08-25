//Math Objects
// --------------TRUNC, ROUND, CEIL AND FLOOR------------------------

//trunc---Returns the integer portion of any number and truncates the decimals
console.log(Math.trunc(Math.PI));

//round---Rounds the floating decimals to integer
console.log(Math.round(125.6354345));

//ceil-(ceiling) Will always round the number UP
console.log(Math.ceil(4.346));

//floor---Will always round number DOWN
console.log(Math.floor(35.7850));

//-------------------POW!!!! Method------------------------

//The POW method takes 2 arguments, the base number and the exponent 
//"TO THE POWER OF!"
console.log(Math.pow(4, 4));
console.log(Math.pow(3, 3));
console.log(Math.pow(5, 10));

//--------------------MIN and MAX---------------------------

//Will return the smallest number / largest number
console.log(Math.min(3, 43, 12));
console.log(Math.max(23, 324, 2343));

//----------------------RANDOM------------------------------

//It provides a pseudo random number from 0 - 1
console.log(Math.random() * 6);
console.log(Math.random(Math.floor) * 18);
console.log(Math.random(Math.ceil) * 1000);
