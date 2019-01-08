window.addEventListener('onload', showIndex());
document.getElementById('push-index').addEventListener('click', showSelect);
document.getElementById('push-select').addEventListener('click', showQuestion);
document.getElementById('select-icon').addEventListener('click', showSelect);

function showIndex() {
    document.getElementById("index").style.display = "";
    document.getElementById("select").style.display = "none";
    document.getElementById("question").style.display = "none";
}

function showSelect() {
    document.getElementById("index").style.display = "none";
    document.getElementById("select").style.display = "";
    document.getElementById("question").style.display = "none";
}

function showQuestion() {
    document.getElementById("index").style.display = "none";
    document.getElementById("select").style.display = "none";
    document.getElementById("question").style.display = "";
}

