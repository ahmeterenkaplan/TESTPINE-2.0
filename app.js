
function back() {
    document.getElementById("box1").style.background="none";
    document.getElementById("hop").style.display = "none";
    document.getElementById("box1").style.border = "none";
}

function allowDrop(g) {
    g.preventDefault();
}

function drag(g) {
    
    g.dataTransfer.setData("a", g.target.id);
}

function drop(g) {
    g.preventDefault();
    var data = g.dataTransfer.getData("a");

    var getinput = document.getElementById(data).getAttribute('data-input');

    var maindiv = document.getElementById(g.target.id)

    maindiv.innerHTML += getinput;


}
console.log("Ahmet Eren Kaplan")