//import json
import {questionList} from './scripts/database.js';

var retrievedLevel = localStorage.getItem("levelArray1");
var retrievedCat = localStorage.getItem("catArray1");
var levelArray = JSON.parse(retrievedLevel);
var catArray = JSON.parse(retrievedCat);

console.log(levelArray);
console.log(catArray);
//When you click on 'newQuestion', addEventListener automatically runs newQuestion
document.getElementById('newQuestion').addEventListener('click', function() {
  newQuestion()
  clearIntro()
});

document.getElementById('prevQuestion').addEventListener('click', prevQuestion);

//defining empty arrays for sorting
var questionLoaded = [];
var questionTemp = [];
var questionMemory = [];
var questionShuffle = [];

// //temporary filters for testing. Link to checkboxes soon.
if (levelArray == null || catArray == null || levelArray == 0 || catArray == 0) {
  var levelArray = [];
  var catArray = [];

  questionList.forEach(function(elementOfList){
      if (levelArray.indexOf(elementOfList.level) == -1){
        levelArray.push(elementOfList.level); }

      if (catArray.indexOf(elementOfList.category) == -1) {
        catArray.push(elementOfList.category); }
  })

  console.log(levelArray, catArray);

//  var levelArray = ['light', 'medium', 'deep'];
//  var catArray = ['aspirations', 'character,', 'fun', 'past', 'reflections', 'relationships', 'worldview'];
}

//Master counter when iterating through question arrays later.
var count = null;
var totalCount = null;

//Intro Text
document.getElementById('deepTitle').textContent = "Deep and Meaningful";
document.getElementById('deepSubtitle').textContent = "Ask someone you care about a question.";

//Fisher-Yates Shuffle
function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

//capitalises first letter of a string
function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function clearIntro(){
  if (totalCount != null){
    document.getElementById('deepTitle').textContent = "";
    document.getElementById('deepSubtitle').textContent = "";
  }
}

//Sorting so that only the questions with the right level go through.
//If you want to understand how it works, console.log(elementOfList)
questionList.forEach(function(elementOfList){
  levelArray.forEach(function(level){
    if (elementOfList.level == level){
      questionTemp.push(elementOfList);
    }
  })
})
console.log(questionTemp);

//Same thing as above but with categories.
questionTemp.forEach(function(elementOfTemp){
  catArray.forEach(function(category){
    if (elementOfTemp.category == category){
      questionLoaded.push(elementOfTemp);
    }
  })
})

//You should have an array full of the questions you want to ask now.
console.log(questionLoaded);

//newQuestion is called everytime you press the New Question button.
//There are two arrays. One is the questionMemory array, which stores all the
//values that have been generated. The other is the questionLoaded array
//which is shuffled and then loaded into questionMemory using a variable
//called count.

//When all the values from questionLoaded have been sent to questionMemory,
//the deck is reshuffled, and the count starts from 0 again. Every time
//a new question is generated, the count goes up.

function newQuestion(){
  //logs the question that's being displayed.
  //if the count is larger than questionLoaded, shuffle.

  if (questionLoaded.length == 0) {
    document.getElementById('questionCat').textContent = "You Cheeky!";
    document.getElementById('questionDisplay').textContent = "Go back to the settings page and load something up :)";
  }

  console.log("Pre-Count:", count);
  console.log("Pre-Total Count:", totalCount);
  console.log("Pre-Question Memory:", questionMemory)
  if (count === null && totalCount === null){
    count = 0;
    totalCount = 0;
    questionLoaded = shuffle(questionLoaded);
    console.log(questionLoaded);
    questionMemory.push(questionLoaded[count]); }

  else if (totalCount == questionMemory.length-1){
    count++;
    totalCount++;
    questionMemory.push(questionLoaded[count]);
    console.log ("totalCount = questionMemory"); }

  else if (totalCount<questionMemory.length-1){
    totalCount++;
    console.log ("totalCount < questionMemory"); }

  console.log("Count:", count);
  console.log("Total Count:", totalCount);
  console.log("Question Loaded:", questionLoaded[count]);
  console.log("Question Memory:", questionMemory)

  //Reshuffle!
  if (count==questionLoaded.length-1){
    questionLoaded = shuffle(questionLoaded);
    count = 0;
    console.log("reshuffled!");
  }

  //Display only if questions are loaded.
  if (questionLoaded.length > 0) {
    document.getElementById('questionCat').textContent = capitalise(questionMemory[totalCount].category);
    document.getElementById('questionDisplay').textContent = questionMemory[totalCount].question;
    localStorage.setItem("levelArray1", JSON.stringify(levelArray));
    localStorage.setItem("catArray1", JSON.stringify(catArray)); }

  //logs each ID for questionMemory
//   questionMemory.forEach(function(element){
//     console.log(element.id);
//   })
// }
}

function prevQuestion(){
  console.log("Pre-Count:", count);
  console.log("Pre-Total Count:", totalCount);

  if (totalCount>0) {
      totalCount--;
      console.log("Gone Back!");

      console.log("Count:", count);
      console.log("Total Count:", totalCount); }

  document.getElementById('questionCat').textContent = capitalise(questionMemory[totalCount].category);
  document.getElementById('questionDisplay').textContent = questionMemory[totalCount].question;
  localStorage.setItem("levelArray1", JSON.stringify(levelArray));
  localStorage.setItem("catArray1", JSON.stringify(catArray));
}

localStorage.setItem("levelArray1", JSON.stringify(levelArray));
localStorage.setItem("catArray1", JSON.stringify(catArray));
