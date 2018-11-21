//Referencing the document window, then finding inputs.
var levelD = document.getElementById('levelCheck');
var catD = document.getElementById('catCheck');
var levelDiv = levelD.getElementsByTagName('input');
var catDiv = catD.getElementsByTagName('input');

//Retrieve localStorage
var retrievedLevel = localStorage.getItem("levelArray1");
var retrievedCat = localStorage.getItem("catArray1");
var levelArray1 = JSON.parse(retrievedLevel);
var catArray1 = JSON.parse(retrievedCat);

window.addEventListener('onload', checkboxChecker());
// document.getElementById('clearStorage').onclick = function() {
//   console.log("clear");
//   clearStorage();
// }


function clearStorage() {
  console.log("clear");
  Array.from(levelDiv).forEach(function(level) {
    let storage = levelArray1.indexOf(level.id),
        check = level.checked;

    if (storage == -1 && check == false) {
      level.checked = true;
      levelArray1.push(level.id);
    }
  })

  Array.from(catDiv).forEach(function(cat) {
    let storage = catArray1.indexOf(cat.id),
        check = cat.checked;

    if (storage == -1 && check == false) {
      cat.checked = true;
      catArray1.push(cat.id);
    }
  })

  localStorage.setItem("levelArray1", JSON.stringify(levelArray1));
  localStorage.setItem("catArray1", JSON.stringify(catArray1));
}



function checkboxChecker() {
  console.log("Level Array pre-Function", levelArray1);

  //If the person hasn't used the app before.
  if (levelArray1 == null || catArray1 == null || levelArray1 == 0 || catArray1 == 0) {
    levelArray1 = [];
    catArray1 = [];
    Array.from(levelDiv).forEach(function(level) {
        level.checked = true;
        levelArray1.push(level.id); })

    Array.from(catDiv).forEach(function(cat) {
        cat.checked = true;
        catArray1.push(cat.id); })

    localStorage.setItem("levelArray1", JSON.stringify(levelArray1));
    localStorage.setItem("catArray1", JSON.stringify(catArray1));
  }


  //Checking through localStorage
  Array.from(levelDiv).forEach(function(level) {
    console.log(level);
    let storage = levelArray1.indexOf(level.id),
        check = level.checked;

    if (level.type === 'checkbox') {
      document.addEventListener('onload', levelLoad());
    }

    function levelLoad(){
      console.log("levelLoad is working!");
      //if the storage says yes and the checkbox says no
      if (storage > -1 && check == false) {
        console.log(level.id, "is checked");
        level.checked = true; }

      //if the storage says no but the checkbox says yes
      else if (storage == -1 && check == true){
        console.log(level.id, "is not checked");
        level.checked = false;
      }
    }
  })

  Array.from(catDiv).forEach(function(cat) {
    console.log(cat);
    let storage = catArray1.indexOf(cat.id),
        check = cat.checked;

    if (cat.type === 'checkbox') {
      document.addEventListener('onload', catLoad());
    }

    function catLoad(){
      console.log("catLoad is working!");
      //if the storage says yes and the checkbox says no
      if (storage > -1 && check == false) {
        console.log(cat.id, "is checked");
        cat.checked = true; }

      //if the storage says no but the checkbox says yes
      else if (storage == -1 && check == true){
        console.log(cat.id, "is not checked");
        cat.checked = false;
      }
    }
  })

console.log(levelArray1);
console.log(catArray1);
localStorage.setItem("levelArray1", JSON.stringify(levelArray1));
localStorage.setItem("catArray1", JSON.stringify(catArray1));

document.querySelector('#levelCheck').onclick = function levelCheck(ev) {
  let id = ev.target.id,
      check = ev.target.checked;

  levelArray1.forEach(function(element) {
    //if the storage says no and the checkbox says yes
    if (element != id && check == true) {
      var index = levelArray1.indexOf(id);
      if (index < 0) {
        levelArray1.push(id);
      }
      console.log("levelArray1 pushed!");
      console.log("levelArray1:", levelArray1); }
    //if the storage says yes but the checkbox says no
    else if (element == id && check != true) {
      index = levelArray1.indexOf(id);
      if (index > -1) {
        levelArray1.splice(index, 1);
      }
      console.log("levelArray1 spliced!");
      console.log("levelArray1:", levelArray1); }

    localStorage.setItem("levelArray1", JSON.stringify(levelArray1));
    })

}

document.querySelector('#catCheck').onclick = function catCheck(ea) {
  let id = ea.target.id,
      check = ea.target.checked;

  catArray1.forEach(function(element) {
    if (element != id && check == true) {
      var index = catArray1.indexOf(id);
      if (index < 0) {
        catArray1.push(id); }
      console.log("catArray1 pushed!");
      console.log("catArray1:", catArray1); }

    else if (element == id && check != true) {
      index = catArray1.indexOf(id);
      if (index > -1) {
        catArray1.splice(index, 1); }
      console.log("catArray1 spliced!");
      console.log("catArray1:", catArray1); }

    localStorage.setItem("catArray1", JSON.stringify(catArray1));
    })
}

}
