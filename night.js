import {icons} from "./scripts/categories.js";

//Variables are a pointer to the original value.
//Here, if you call the variable setNightMode, you'll only get the value back. You won't toggle it.
var nightModeDisplay = document.documentElement.classList.toggle('night-mode');
var nightMode = null;

//To toggle night mode, use this function.
function toggleClass(element) {
    document.documentElement.classList.toggle(element);
}

//ON LOAD ----------
window.addEventListener('onload', retrieveStorage());

//Retrieves Storage
function retrieveStorage() {
    var nightModeStorage = localStorage.getItem('night-mode');
    nightMode = JSON.parse(nightModeStorage);
    checkStorage();
    checkMismatchedNightMode();
    iconsNightMode();
    toStorage();
}

//If there's nothing in storage, set nightMode to 0.
function checkStorage() {
    if (nightMode == null) {
        nightMode = 0;
    }
}

//Checks for differences between nightMode value and display.
function checkMismatchedNightMode(){
    if (nightMode == 1 && nightModeDisplay == false) {
        toggleClass('night-mode');
    } else if (nightMode == 0 && nightModeDisplay == true) {
        toggleClass('night-mode');
    }
}

//ON CLICK ----------
document.getElementById('night-mode').addEventListener('click', toggleNightMode);

//Toggles on and off nightMode's value and its display.
function toggleNightMode() {
    checkStorage();
    if (nightMode == 0) {
        nightMode = 1;
    } else if (nightMode == 1) {
        nightMode = 0;
    }
    toggleClass('night-mode');
    iconsNightMode();
    toStorage();
}

//Toggles on and off the svg icons for night mode.
function iconsNightMode() {
    if (nightMode == "1") {
        document.getElementById("svg-intro").src = icons[0].imageNight;
        document.getElementById("svg-select").src = icons[1].imageNight;
        console.log("icons on!");
    } else if (nightMode == "0") {
        document.getElementById("svg-intro").src = icons[0].image;
        document.getElementById("svg-select").src = icons[1].image;
        console.log("icons off!");
    }
}

//Pushes to storage.
function toStorage() {
    localStorage.setItem("night-mode", JSON.stringify(nightMode));
}

console.log(document.getElementById("svg-intro").src);
export {nightMode};