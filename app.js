// Array Assignment Start

// 1. Empty array using JS literal notation to store student names
var studentNames = [];

// 2. Empty array using JS object notation to store student names
var studentNamesObj = new Array();

// 3. Strings array declare and initialize
var stringArray = ["John", "Jane", "Doe"];

// 4. Numbers array declare and initialize
var numbersArray = [1, 2, 3, 4, 5];

// 5. Boolean array declare and initialize
var booleanArray = [true, false, true, false];

// 6. Mixed array declare and initialize
var mixedArray = ["Ali", 21, true, "Student"];


// --------------------------------------


var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

for (var i = 0; i < qualifications.length; i++) {
   
    document.write(qualifications[i] + "<br>");
}
// // _______________________

var students = ["Waqas", "Ahsan", "Noman"];
var Score = [450, 400, 470];
var totalMarks = 500;

for (var i = 0; i < students.length; i++) {
    var percentage = (Score[i] / totalMarks) * 100; 
    
    document.write(`
        Student: ${students[i]} <br>
        Score: ${Score[i]} <br>
        Percentage: ${percentage}% <br><br>
    `);
}

// __________________________________

var colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
document.write("Original Array: " + colors + "<br><br>");

var colorAtBeginning = prompt("What color do you want to add to the beginning?");
colors.unshift(colorAtBeginning);
document.write("After adding color at the beginning: " + colors + "<br><br>");

var colorAtEnd = prompt("What color do you want to add to the end?");
colors.push(colorAtEnd);
document.write("After adding color at the end: " + colors + "<br><br>");

colors.unshift("Orange", "Pink");
document.write("After adding two more colors at the beginning: " + colors + "<br><br>");

colors.shift();
document.write("After deleting the first color: " + colors + "<br><br>");

colors.pop();
document.write("After deleting the last color: " + colors + "<br><br>");

var indexToAdd = prompt("At which index do you want to add a color?");
var colorToAdd = prompt("What color do you want to add?");
colors.splice(indexToAdd, 0, colorToAdd);
document.write(`After adding ${colorToAdd} at index ${indexToAdd}: ` + colors + "<br><br>");

var indexToDelete = prompt("At which index do you want to delete color(s)?");
var numberOfColorsToDelete = prompt("How many colors do you want to delete?");
colors.splice(indexToDelete, numberOfColorsToDelete);
document.write("After deleting colors: " + colors + "<br><br>");
// ___________________


var studentScores = [85, 72, 90, 60, 75];


studentScores.sort()


document.write("Sorted Student Scores in Ascending Order: " + studentScores + "<br>");

_______________________


var CitiesList = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

var returnCity = CitiesList.slice(2,4); // Adjusted to get the city at index 2

document.write(`Original Array: ${CitiesList} <br>`);
document.write(`City: ${returnCity} <br>`);

// _____________

var arr = ["This ", " is ", " my ", " cat"];

var joinArray = arr.join(" ");

document.write(`Array: ${arr} <br>`);
document.write(`Join Array: ${joinArray} <br>`);

_________________________



var ArrayLine =['keyboard', 'mouse', 'monitor', 'speaker'];
for (var i = 0; i < ArrayLine.length; i++) {

    document.write(`Out: <br> ${ArrayLine[i]} <br>`);
}

___________________________

var ArrayLine =['keyboard', 'mouse', 'monitor', 'speaker'];
for (var i = ArrayLine.length-1; i >= 0; i--) {

    document.write(`Out: <br> ${ArrayLine[i]} <br>`);
}

____________________________________

var phoneManufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];

document.write('<select>');

for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write(`<option value="${phoneManufacturers[i]}">${phoneManufacturers[i]}</option>`);
}

document.write('</select>');

////////////////////// ________________________________________________////////////////////////////





// Empty array and multi-dimensional array
var EnptyArray = [[], []];
var multiDimensionalArray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

// 1. Counting from 1 to 10
document.write("<h3>Counting from 1 to 10:</h3>");
for (let i = 1; i <= 10; i++) {
    document.write(`${i} <br>`);
}

// 2. Multiplication table (with user input)
let tableNumber = +prompt("Enter the table number:");
let tableLength = +prompt("Enter the length of the table:");

document.write(`<h3>Multiplication Table of ${tableNumber}:</h3>`);
for (let i = 1; i <= tableLength; i++) {
  document.write(`${tableNumber} x ${i} = ${tableNumber * i} <br>`);
}

// 3. Fruits Array
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write("<h3>Fruits List:</h3>");
for (let i = 0; i < fruits.length; i++) {
    document.write(`${fruits[i]} <br>`);
}

document.write("<h3>Fruits with Index:</h3>");
for (let i = 0; i < fruits.length; i++) {
    document.write(`Element at index ${i} is ${fruits[i]} <br>`);
}

// 4. Reverse Counting from 15 to 1
document.write("<h3>Reverse Counting from 15 to 1:</h3>");
for (let i = 15; i > 0; i--) {
    document.write(`${i} `);
}
document.write("<br>");

// 5. Even Numbers from 0 to 20
document.write("<h3>Even Numbers from 0 to 20:</h3>");
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        document.write(`${i} `);
    }
}
document.write("<br>");

// 6. Odd Numbers from 0 to 20
document.write("<h3>Odd Numbers from 0 to 20:</h3>");
for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
        document.write(`${i} `);
    }
}
document.write("<br>");
document.write("<h3>Even Numbers from 0 to 20:</h3>");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        document.write(`${i}k <br/>`);
    }
}
document.write("<br>");
// =======================================================

// Array of bakery items
let A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
let userinpt = prompt("Enter a food item:").toLowerCase();
let found = false;
for (let i=0; i< A.length; i++)
{
    if(A[i] === userinpt)
    {
        document.write(`The Food you Want ${userinpt} is available at index ${i} in our bakery.`);
        found = true;
        break;
    }
}
if(!found)
{
    document.write(`Sorry, ${userinpt} is not available in our bakery.`);
}   
document.write("<br>");
// ------------------------------
let largArray = [45, 36, 87, 65, 97, 25, 99, 65, 246, 83, 56, 75, 5];


let largestNum = largArray[0];

// Loop through the array
for (let i = 1; i < largArray.length; i++) { 
    if (largArray[i] > largestNum) {
        largestNum = largArray[i]; 
    }
}

document.write(`The largest Number is ${largestNum}`);
document.write("<br>");


// -----------------------------

let smallArray = [45, 36, 87, 65, 97, 25, 99, 65, 246, 83, 56, 75, 5];


let smallNum = smallArray[0];

// Loop through the array
for (let i = 1; i < smallArray.length; i++) { 
    if (smallArray[i] < smallNum) {
        smallNum = smallArray[i]; 
    }
}

document.write(`The smallest Number is ${smallNum}`);



for(let i = 0; i <= 100; i++)
{
   if (i % 5 === 0) {
    document.write(`${i} <br>`);
   }
}
