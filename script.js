function mouseOver(id) {
  document.getElementById(id).style.transform = "scale(170%)";
  document.getElementById(id).style.zIndex = "2";
  document.getElementById(id).style.border = "4px solid silver";
  document.getElementById(id).style.borderRadius = "8px";
  document.getElementById(id).style.backgroundColor = "#fff";
}
function mouseOut(id) {
  document.getElementById(id).style.transform = "";
  document.getElementById(id).style.zIndex = "";
  document.getElementById(id).style.border = "";
  document.getElementById(id).style.borderRadius = "";
  document.getElementById(id).style.backgroundColor = "";
}
function kaufen(uhrName) {
  alert(uhrName + " --- KAUFEN! KAUFEN KAUFEN!");
}

// EXTRAS / GEHÖRT NICHT ZUR ÜBUNGSAUFGABE

// Zufällige Preise
const preisListe = document.getElementsByClassName("preis");
const preisArray = Array.from(preisListe);

preisArray.forEach((preis) => {
  preis.innerText = getRandomNumber(50, 500) + ",- EUR";
});

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
