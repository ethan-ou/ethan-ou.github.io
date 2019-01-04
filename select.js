import {categories} from './scripts/categories.js';

var radioFrame = document.getElementById("radio-frame");
var radio = radioFrame.getElementsByTagName('input');
var selected = null;

window.addEventListener('onload', retrieveStorage());
window.addEventListener('onclick', radioClick());

//Gets storage. If there's something in storage, it passes the value to "selected".
function retrieveStorage() {
    var storageSelected = localStorage.getItem("selected");
    var retrievedSelected = JSON.parse(storageSelected);
    if (retrievedSelected != null) {
        selected = retrievedSelected;
        radioOn();
    } else {
        radioCheck();
    }
}

//This function activates when there's something in storage.
//If there's radio button with the same value as storage, check it.
function radioOn() {
    Array.from(radio).forEach(function(button) {
        if (button.value == selected) {
            button.checked = true;
            display();
        }
    });
}

//This function activates when nothing's in storage.
//If there's a button that's checked, pass the value to "selected".
function radioCheck() {
    Array.from(radio).forEach(function(button) {
        if (button.checked == true) {
            selected = button.value;
            display();
        }
    });
}

//This function activates every time a button is clicked.
//Checks the button and passes value to "selected" if you click it.
function radioClick() {
    Array.from(radio).forEach(function(button) {
        button.onclick = function() {
            selected = this.value;
            this.checked = true;
            display();
            toStorage();
        }
    });
}

//Displays the Selected of the radio button.
function display() {
    document.getElementById('category').textContent = categories[selected].name;
    document.getElementById('description').textContent = categories[selected].description;
    document.getElementById("svg-category").src = categories[selected].image;
}

//Pushes the value of the selected radio button to storage.
function toStorage() {
    localStorage.setItem("selected", JSON.stringify(selected));
}