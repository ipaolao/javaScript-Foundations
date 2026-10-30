// JavaScript Foundations Coding Assignment
//Paola Morfin

//Instructions
/*For all the exercises, write the requested JavaScript code in a new .js file. 
Use console.log() to make verify your solution to each exercise. Solutions
 must adhere to standard JavaScript rules like using camelCase for variable 
 names and ending statements with semicolons.
*/

//Exercise 1: Formatting and Naming (Code Correction)
/*Correct the code to follow camelCase, proper whitespace/indentation, and
the use of semicolons.*/
console.log("\n");
console.log("Exercise 1");
var thisIsANewVariable = 10;
if (thisIsANewVariable === 10) {
  console.log("New Variable is 10");
}
console.log("\n");

//Exercise 2: Variables and Data Types

/*Write three separate variable declarations using the `let` keyword to store the 
following data types. Ensure the variable names are in camelCase
1. A string using backticks (template string definition).
2. A number that is a float.
3. A boolean value of `true` (must be written without quotation marks).
*/
console.log("Exercise 2");

let myString = `Hello, world!`;
let myNumber = 42.2;
let myBoolean = true;

console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log("\n");

//Exercise 3: Single-Line Comments (Coding)
/* Add a single-line comment to the following variable assignment that explains to a
 human reader the purpose of the variable. */

//stores current score of 95 
console.log("Exercise 3");

let currentScore = 95;
console.log(currentScore);
console.log("\n");

//Exercise 4: Equality Comparison (Coding)

/*Using `console.log()`, write two separate comparisons between the string `'100'` 
and the number `100`.

1. Use the operator that checks for value equality (`==`).
2. Use the operator that checks for absolute strict equality (`===`). */
console.log("Exercise 4");

console.log('100' == 100);
console.log('100' === 100);
console.log("\n");

//Exercise 5: Ternary Operator (Coding)

/*Using the ternary operator,Write a Ternary Operator that checks if the variable `isWeekend`
 is `true`. If true, assign the string `"Day off"` to the variable `schedule`, otherwise 
 assign `"Work day"`. */
console.log("Exercise 5");

let isWeekend = false;
let schedule = isWeekend ? "Day off" : "Work day";

console.log(schedule); 
console.log("\n");

//Exercise 6: If/Else Structure (Coding)

/*Write an if/else statement that checks if the variable `userAge`. If `userAge` is greater
 than or equal to 18, log the message `"Access Granted"`. Otherwise, if the condition is 
 not met, log the message `"Access Denied"`. */
console.log("Exercise 6");
let userAge = 16;

if (userAge >= 18) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}
console.log("\n");

// Exercise 7: Logical AND Operator (Coding)

/*Write an `if` statement using the AND operator The code block should only 
execute if both `hasPermission` is `true` AND `itemCount` is less than 5. If both 
are true, log `"Ready to process"`. */
console.log("Exercise 7");
let hasPermission = true;
let itemCount = 3;

if (hasPermission && itemCount < 5) {
  console.log("Ready to process");
}
console.log("\n");

//Exercise 8: For Loop (Coding)

/*Write a standard **`for` loop** that runs exactly 5 times. Inside the loop, log
the current iteration number (starting from 1). */
console.log("Exercise 8");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("\n");

// Exercise 9: Loop Control (Coding)

/*Write a `for` loop that iterates from 0 to 9. Use the `break` keyword to 
terminate the loop early if the iteration number reaches 7. */
console.log("Exercise 9");
for (let i = 0; i < 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
console.log("\n");

//Exercise 10: Ensuring Execution (Coding)

/*The `do while` loop ensures the core block runs at least once. Write a 
`do while` loop using the variable `counter` that logs `"Running once"` inside 
the `do` block. Set the `while` condition such that the loop never repeats. */
console.log("Exercise 10");
let counter = 10;
do {
  console.log("Running once");
} while (counter < 5);
console.log("\n");

// Exercise 11: Function Definition (Coding)

/*Define a function named `calculateArea`. This function must accept two
parameters (`width` and `height`), multiply them, and use a return value 
to send the result back to the caller. Then, call the function with the 
arguments 5 and 10, and store the result in a variable named `resultArea`. */
console.log("Exercise 11");
function calculateArea(width, height) {
  return width * height;
}

let resultArea = calculateArea(5, 10);
console.log(resultArea); 
console.log("\n");

// Exercise 12: Array Manipulation (Coding)

/* Define an array named `fruitList` initialized with `['Apple', 'Banana']`. Then, write the code necessary to:

1. Add the string `'Grape'` to the **end** of the array.
2. Remove the **first** item (`'Apple'`) from the array.
3. Log the **index number** of `'Banana'`. */
console.log("Exercise 12");
let fruitList = ['Apple', 'Banana'];
fruitList.push('Grape');
fruitList.shift();

console.log("Index number of Banana: " + fruitList.indexOf('Banana'));
console.log("\n");

// Exercise 13: Array Copying (Coding)

/* Define an array named `originalData`. Use the `slice` method** to create a separate copy of
`originalData` and store it in a new variable named `clonedData`. What type of copy does slice do. 
What should you be aware of when you do this type of copy? */
console.log("Exercise 13");

let originalData = [1, 2, 3, 4, 5];
let clonedData = originalData.slice();

console.log(clonedData);
console.log("\n");

// Exercise 14: Object Constructor (Coding)

/* Create an Object Constructor function named `Animal` (capitalizing the first letter to signify it 
is an object). The constructor should accept `species` and `sound` as parameters. Use the `this` keyword 
to assign these properties to the object being created. */
console.log("Exercise 14");
function Animal(species, sound) {
  this.species = species;
  this.sound = sound;
}

let myAnimal = new Animal("Cow", "Moo");
console.log(myAnimal);
console.log("\n");

//Exercise 15: Object Instantiation (Coding)

/*Using the `Animal` constructor from Exercise 14, create two new instances of objects:

1. `dog` (species: "Canine", sound: "Woof")
2. `cat` (species: "Feline", sound: "Meow")

Store both of these new object instances inside an array named `animalArray`.*/

console.log("Exercise 15");
function Animal(species, sound) {
  this.species = species;
  this.sound = sound;
}

let dog = new Animal("Canine", "Woof");
let cat = new Animal("Feline", "Meow");
let animalArray = [dog, cat];
console.log(animalArray);
