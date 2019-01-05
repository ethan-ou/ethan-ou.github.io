import {questionList} from './scripts/database.js';

var count = null;
var showCount = null;
var sortedQuestions = [];
var memory = [];

var storageSelected = localStorage.getItem("selected");
var retrievedSelected = JSON.parse(storageSelected);

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

//ON LOAD ---------------
window.addEventListener('onload', retrieveStorage());

//Retrieves Storage. If retrieved is null, then set to 0 (fun).
function retrieveStorage() {
    if (retrievedSelected == null) { 
        retrievedSelected = "0";
        localStorage.setItem("selected", JSON.stringify(retrievedSelected));
    }
    sortQuestionList();
} 

//Sorts questions from questionList and shuffles them.
function sortQuestionList() {
    questionList.forEach(function(question){
        if (question.level == retrievedSelected){
            sortedQuestions.push(question);
        }
    })
    shuffle(sortedQuestions);
    loadFirstQuestion();
}

//Pushes first question to the display on page load. Sets counter to 0.
function loadFirstQuestion() {
    count = 0;
    showCount = 0;
    memory.push(sortedQuestions[count]);
    display("questionCat", capitalise(memory[showCount].category));
    display("questionDisplay", memory[showCount].question);
}

//NEW QUESTION  ---------------
//Note: having brackets around the function runs it onload (IIFE). Omitted brackets to avoid this.
document.getElementById('newQuestion').addEventListener('click', newQuestion);

//Displays new question.
//count iterates up when pushing a new question (sortedQuestions[count]).
//showCount moves up and down to display what's on the page (memory[showCount]).
function newQuestion(){
    if (showCount == memory.length-1) {
        count++;
        showCount++;
        memory.push(sortedQuestions[count]);
    } else if (showCount < memory.length-1) {
        showCount++;
    }
    reshuffle();
    display("questionCat", capitalise(memory[showCount].category));
    display("questionDisplay", memory[showCount].question);
}

//Reshuffles. Sets count to -1 so that on next button press, it loads sortedQuestions[0]
function reshuffle(){
    if (count == sortedQuestions.length-1) {
        shuffle(sortedQuestions);
        count = -1;
    }
}

//PREVIOUS BUTTON  ---------------
document.getElementById('prevQuestion').addEventListener('click', prevQuestion);

//Reduces showCount to show previous questions.
//When pressing newQuestion, it iterates up showCount until it's even with count.
function prevQuestion(){
    if (showCount > 0) {
        showCount--;
    }
    display("questionCat", capitalise(memory[showCount].category));
    display("questionDisplay", memory[showCount].question);
}

function display(id, text){
    document.getElementById(id).textContent = text;
}