
function uhr1() {
  document.getElementById("uhrA").src = "img/1-1.jpg";
}
function uhre1() {
  document.getElementById("uhrA").src = "img/1.jpg";
}


function uhr2() {
  document.getElementById("uhrB").src = "img/2-2.jpg";
}
function uhre2() {
  document.getElementById("uhrB").src = "img/2.jpg";
}


function uhr3() {
  document.getElementById("uhrC").src = "img/3-3.jpg";
}
function uhre3() {
  document.getElementById("uhrC").src = "img/3.jpg";
}


function uhr4() {
  document.getElementById("uhrD").src = "img/4-4.jpg";
}
function uhre4() {
  document.getElementById("uhrD").src = "img/4.jpg";
}

function uhr5() {
  document.getElementById("uhrE").src = "img/5-5.jpg";
}
function uhre5() {
  document.getElementById("uhrE").src = "img/5.jpg";
}

function uhr6() {
  document.getElementById("uhrF").src = "img/6-6.jpg";
}
function uhre6() {
  document.getElementById("uhrF").src = "img/6.jpg";
}

function uhr7() {
  document.getElementById("uhrG").src = "img/7-7.jpg";
}
function uhre7() {
  document.getElementById("uhrG").src = "img/7.jpg";
}

function uhr8() {
  document.getElementById("uhrH").src = "img/8-8.jpg";
}
function uhre8() {
  document.getElementById("uhrH").src = "img/8.jpg";
}

function uhr9() {
  document.getElementById("uhrI").src = "img/9-9.jpg";
}
function uhre9() {
  document.getElementById("uhrI").src = "img/9.jpg";
}

function uhr10() {
  document.getElementById("uhrJ").src = "img/10-10.jpg";
}
function uhre10() {
  document.getElementById("uhrJ").src = "img/10.jpg";
}




function kaufen(produktName, preis) {
  document.getElementById("warenkorb").style.display = "block";

  document.getElementById("list").innerHTML =
    document.getElementById("list").innerHTML +
    "<tr><td>" +
    produktName +
    "</td><td>" +
    preis +
    " €</td></tr>";


  let letzteSumme = document.getElementById("gesamtbetrag").innerHTML;
  letzteSumme = letzteSumme.replace(" €", "");
  letzteSumme = Number(letzteSumme);
  document.getElementById("gesamtbetrag").innerHTML = letzteSumme + preis + " €";
}
function switchCurrency() {
  let preisElemente = document.getElementsByClassName("preis");
  let preise = [];

  for (let i = 0; i < preisElemente.length; i++) {
    let preisText = preisElemente[i].innerHTML;
    let preisZahl = zahlVonText(preisText);
    preise.push(preisZahl);
  }
};



