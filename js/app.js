// One of the early challenges for 'variables and strings' from Treehouse. We have to set up a few rounds of questions to the user and spit back out answers in funny sentence.

// 1.Declare vaiables and capture input.
let name = prompt('What is your name my friend?');
let age = prompt("How many years have you been on this earth?");
let animal = prompt('What is your favorite animal?');
let season = prompt("What is your favorite season!?");

// 2. Combine the input with other words to create the story
let message = `There once was a moronic Kaiju Street Sweeper named ${name}, who had flunked out of the Defense Force tryouts ${age} TIMES! And yet, ${name} would not give up! So with the help of ${name}'s faithful ${animal} companion, Rathsheeba, one ${season} morning, ${name} FINALLY was inducted into the Defense Force to fight the unabading Kaiju and their relentless assault!`

// 3. Display the story on the page!
document.querySelector('p').innerHTML = message;