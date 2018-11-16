import * as jQuery from "./scripts/jquery-3.3.1.js";
$(function () {
        console.log('Hello jQuery');
});

// Check
document.getElementById("checkbox").checked = true;

// Uncheck
document.getElementById("checkbox").checked = false;

//MAKE THE PROGRAM WORK FIRST, then make the code succinct.

//VISUAL:
//Category tag above questions
//Keep text above button at all screen resolutions (use CSS screen heights or maths solution)
//Therapy Mode: Switch CSS styles to make everything black for night

//DATABASE:
//Store state of HTML checkbox in (database?)


//OPTIONS:
//Hide categories (to avoid priming people about how to respond)
//Back button

//Edge case: using app horizontally on phone. Disable horizontal.


var obj = JSON.parse(text, function (key, value){
  if (key == "deep")
    return //????
  if  (key == "medium"){

  }
} )


var questions = require('./scripts/database');
var m = new MersenneTwister();
var randNumber = Math.floor(m.random() * (questions.length));

//Variables

//Store Checkbox values
//https://www.sitepoint.com/quick-tip-persist-checkbox-checked-state-after-page-reload/
//the variable checkboxValues contains a parsed JSON file, where you find an item
//called 'checkbox values. Either that or the variable $checkboxes equals a
//checkbox container, with a checkbox.

//If the checkboxes are on, put "change" in the storage.


//note: getElementById gets the id= element
//DOM Variables

//Set default behaviour for each checkbox

let levLight = document.getElementById ('light'),
    levMedium = document.getElementById ('medium'),
    levDeep = document.getElementById ('deep'),
    levArray = [];

let catAspirations = document.getElementById ('aspirations'),
    catCharacter = document.getElementById ('character'),
    catFun = document.getElementById ('fun'),
    catPast = document.getElementById ('past'),
    catReflections = document.getElementById ('reflections'),
    catRelationships = document.getElementById ('relationships'),
    catWorldview = document.getElementById ('worldview'),
    catArray = [];

console.log(catArray[0]);

//Push strings into levelArray
if (levelLight === true) {
    levelArray.push('light') };
if (levelMedium === true) {
    levelArray.push('medium') };
if (levelDeep === true) {
    levelArray.push('deep') };

//Select random object from database

for (let i = 0; i < questionList.length; i++);
  if questionList.level //corresponds to typeArray && categoryArray
  {

  }





function randomQuestion(random) {
  for (let i = 0; i < questions.length; i++);
  let swapIdx = Math.floor(Math.random() * questions.length);
  let tmp = deck[swapIdx];
  deck[swapIdx] = deck[i];
  deck[i] = tmp;
}

fuction getQuestion()



//X. Store checkbox.checked data so that it retains its state after refresh.
//0. Load array from database.js
//1. Loop through items in array and take one random object.
//2. Check if object category and type corresponds to checkbox true/false.
//3. If it passes all checks, push the value of the random number
//   into a separate array (questionIndex). Else, go back to step 1.
//4. Display "question" data on screen. Display "category" data above text.

//5. If button.reverse is pressed, go to questionIndex, then read previous position.
//   Refer to object value in database.js
//   Go to step 4.

//Critique: this wouldn't work if next question was a button that would
//          simply go to the next item in the shuffled array.
//
//          Try creating a shuffled array, then using reverse and new question
//          button to go through the items in the array. Then reshuffle once
//          array is finished. Store all values of the shuffling.




----------


//Set default behaviour for each checkbox

let levelLight = document.getElementById ('light'),
    levelMedium = document.getElementById ('medium'),
    levelDeep = document.getElementById ('deep'),
    levelArray = [];

let catAspirations = document.getElementById ('aspirations'),
    catCharacter = document.getElementById ('character'),
    catFun = document.getElementById ('fun'),
    catPast = document.getElementById ('past'),
    catReflections = document.getElementById ('reflections'),
    catRelationships = document.getElementById ('relationships'),
    catWorldview = document.getElementById ('worldview'),
    catArray = [];

console.log(catArray[0]);

//Push level into levelArray
if (levelLight == true) {
    levelArray.push('light')};
if (levelMedium == true) {
    levelArray.push('medium')};
if (levelDeep == true) {
    levelArray.push('deep')};

//Push categories into catArray
if (catAspirations == true) {
  catArray.push('aspirations')};
//Continue



//Stores the values of these arrays in JSON strings in localStorage
//https://www.taniarascia.com/how-to-use-local-storage-with-javascript/
localStorage.setItem('level', JSON.stringify(levelArray));
const levelData = JSON.parse(localStorage.getItem('level'));

localStorage.setItem('category', JSON.stringify(catArray));
const catData = JSON.parse(localStorage.getItem('category'));


//Sorts through JSON database to determine which questions fit the categories.

const sortedQuestions = [];
//Implementation 1: If questionList.level == (one of the items in array) && questionList.category (another array item)

//Debug. There should be a better way to do this.
for (var i=0; i<levelArray.length; i++){
  for (var j=0; j<catArray.length; j++){
    sortedQuestions.push(levelArray[i] * catArray[j]);
  }
}





//then add to sortedQuestions
