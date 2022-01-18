function bildgroß() {
  document.getElementById("uhr").style.width = "500px";
  document.getElementById("uhr").style.height = "500px";
}
function bildklein() {
  document.getElementById("uhr").style.width = "250px";
  document.getElementById("uhr").style.height = "250px";
}
function bildgroß1() {
  document.getElementById("uhr1").style.width = "500px";
  document.getElementById("uhr1").style.height = "500px";
}
function bildklein1() {
  document.getElementById("uhr1").style.width = "250px";
  document.getElementById("uhr1").style.height = "250px";
}
function bildgroß2() {
  document.getElementById("uhr2").style.width = "500px";
  document.getElementById("uhr2").style.height = "500px";
}
function bildklein2() {
  document.getElementById("uhr2").style.width = "250px";
  document.getElementById("uhr2").style.height = "250px";
}
function bildgroß3() {
  document.getElementById("uhr3").style.width = "500px";
  document.getElementById("uhr3").style.height = "500px";
}
function bildklein3() {
  document.getElementById("uhr3").style.width = "250px";
  document.getElementById("uhr3").style.height = "250px";
}
function bildgroß4() {
  document.getElementById("uhr4").style.width = "500px";
  document.getElementById("uhr4").style.height = "500px";
}
function bildklein4() {
  document.getElementById("uhr4").style.width = "250px";
  document.getElementById("uhr4").style.height = "250px";
}
function bildgroß5() {
  document.getElementById("uhr5").style.width = "500px";
  document.getElementById("uhr5").style.height = "500px";
}
function bildklein5() {
  document.getElementById("uhr5").style.width = "250px";
  document.getElementById("uhr5").style.height = "250px";
}
function bildgroß6() {
  document.getElementById("uhr6").style.width = "500px";
  document.getElementById("uhr6").style.height = "500px";
}
function bildklein6() {
  document.getElementById("uhr6").style.width = "250px";
  document.getElementById("uhr6").style.height = "250px";
}
function bildgroß7() {
  document.getElementById("uhr7").style.width = "500px";
  document.getElementById("uhr7").style.height = "500px";
}
function bildklein7() {
  document.getElementById("uhr7").style.width = "250px";
  document.getElementById("uhr7").style.height = "250px";
}
function bildgroß8() {
  document.getElementById("uhr8").style.width = "500px";
  document.getElementById("uhr8").style.height = "500px";
}
function bildklein8() {
  document.getElementById("uhr8").style.width = "250px";
  document.getElementById("uhr8").style.height = "250px";
}

let currency = "euro"; // merkt sich aktuelle Währung
const dollarKurs = 1.13; // Kurs nur hier ändern

function switchCurrency() {
  // von den nächsten zwei Zeilen nicht verwirren lassen
  // hatten wir noch nicht.
  let preise = document.getElementsByClassName("price");
  let preisText = preise[0].innerHTML;
  let preisZahl = zahlVonText(preisText);

  if (currency == "euro") {
    // aktive Währung wechseln
    currency = "dollar";
    // Button umbenennen
    document.getElementById("btnswitch").innerHTML =
      "Preise in Euro anzeigen";
    // 1. Preis ändern
    preise[0].innerHTML = "$ " + (preisZahl * dollarKurs).toFixed(2);
    // nur else würde reichen, benutze else if () für Klarheit
  } else if (currency == "dollar") {
    // aktive Währung wechseln
    currency = "euro";
    // Button umbenennen
    document.getElementById("btnswitch").innerHTML =
      "Preise in Dollar anzeigen";
    // 1. Preis ändern
    preise[0].innerHTML = (preisZahl / dollarKurs).toFixed(2) + " €";
  }
}

// Funktion die Preis (String) in eine Zahl umwandelt und
// zurück gibt (return)
function zahlVonText(text) {
  text = text.replace(",00", ""); // für Start
  text = text.replace(" €", ""); // für Umwandlung € -> $
  text = text.replace("$ ", ""); // für Umwandlung $ -> €
  return text;
}


 
function macbookkaufen() {
  document.getElementById("summe").innerHTML =
  document.getElementById("summe").innerHTML + "<li>" + "Macbook Pro - 1299.00 €" + "</li>";
  document.getElementById("list").innerHTML =
  document.getElementById("list").innerHTML + "<li>" + "Macbook Pro - 1299.00 €" + "</li>";

          // Gesamtsumme
  document.getElementById("zusammenrechnen").innerHTML =
              // gesamtbetrag + neues Produkt
  Number(document.getElementById("zusammenrechnen").innerHTML)
  +
  Number(document.getElementById("macbookpreis").innerHTML);
}

function kopfhörerkaufen() {
  document.getElementById("summe").innerHTML =
  document.getElementById("summe").innerHTML + "<li>" + "Kopfhörer - 399.00 €" + "</li>";
  document.getElementById("list").innerHTML =
  document.getElementById("list").innerHTML + "<li>" + "Kopfhörer - 399.00 €" + "</li>";
  document.getElementById("zusammenrechnen").innerHTML =
  Number(document.getElementById("zusammenrechnen").innerHTML)
  +
  Number(document.getElementById("kopfhörerpreis").innerHTML);
}

function macairkaufen() {
  document.getElementById("summe").innerHTML =
  document.getElementById("summe").innerHTML + "<li>" + "Macbook Air Pro - 1399.00 €" + "</li>";
  document.getElementById("list").innerHTML =
  document.getElementById("list").innerHTML + "<li>" + "Macbook Air Pro - 1399.00 €" + "</li>";   
  document.getElementById("zusammenrechnen").innerHTML =
  Number(document.getElementById("zusammenrechnen").innerHTML)
  +
  Number(document.getElementById("macairpreis").innerHTML);
}

function tabletkaufen() {
  document.getElementById("summe").innerHTML =
  document.getElementById("summe").innerHTML + "<li>" + "Sony Tablet - 499.00 €" + "</li>";
  document.getElementById("list").innerHTML =
  document.getElementById("list").innerHTML + "<li>" + "Sony Tablet - 499.00 €" + "</li>";
  document.getElementById("zusammenrechnen").innerHTML =
  Number(document.getElementById("zusammenrechnen").innerHTML)
  +
  Number(document.getElementById("tabletpreis").innerHTML);
}

function headsetkaufen() {
  document.getElementById("summe").innerHTML =
  document.getElementById("summe").innerHTML + "<li>" + "Sony Bluetooth Kopfhörer - 299.00 €" + "</li>";
  document.getElementById("list").innerHTML =
  document.getElementById("list").innerHTML + "<li>" + "Sony Bluetooth Kopfhörer - 299.00 €" + "</li>";
  document.getElementById("zusammenrechnen").innerHTML =
  Number(document.getElementById("zusammenrechnen").innerHTML)
  +
  Number(document.getElementById("headsetpreis").innerHTML);
}

function asuskaufen() {
  document.getElementById("summe").innerHTML =
  document.getElementById("summe").innerHTML + "<li>" + "Asus Gaming Laptop - 799.00 €" + "</li>";
  document.getElementById("list").innerHTML =
  document.getElementById("list").innerHTML + "<li>" + "Asus Gaming Laptop - 799.00 €" + "</li>";
  document.getElementById("zusammenrechnen").innerHTML =
  Number(document.getElementById("zusammenrechnen").innerHTML)
  +
  Number(document.getElementById("asuspreis").innerHTML);
}

function galaxykaufen() {
  document.getElementById("summe").innerHTML =
  document.getElementById("summe").innerHTML + "<li>" + "Samsung Galaxy - 399.00 €" + "</li>";
  document.getElementById("list").innerHTML =
  document.getElementById("list").innerHTML + "<li>" + "Sony Tablet - 399.00 €" + "</li>";
  document.getElementById("zusammenrechnen").innerHTML =
  Number(document.getElementById("zusammenrechnen").innerHTML)
  +
  Number(document.getElementById("galaxypreis").innerHTML);
}

/*function laptopkaufen() {
  document.getElementById("summe").innerHTML =
  document.getElementById("summe").innerHTML + "<li>" + "Asus Laptop - 599.00 €" + "</li>";
  document.getElementById("list").innerHTML =
  document.getElementById("list").innerHTML + "<li>" + "Aus Laptop - 599.00 €" + "</li>";
  document.getElementById("zusammenrechnung").innerHTML =
  Number(document.getElementById("zusammenrechnung").innerHTML)
  +
  Number(document.getElementById("laptoppreis").innerHTML);
} */
 
function laptopkaufen() {
  document.getElementById("tabelle").innerHTML =
  document.getElementById("tabelle").innerHTML + "<td> <li>" + "Asus Laptop - 599.00 €" + "</li> </td> <br>";
  document.getElementById("zusammenrechnung").innerHTML =
  Number(document.getElementById("zusammenrechnung").innerHTML)
  +
  Number(document.getElementById("laptoppreis").innerHTML);
}


/*function camkaufen() {
  document.getElementById("summe").innerHTML =
  document.getElementById("summe").innerHTML + "<li>" + "Rekam Digitalkamera - 299.00 €" + "</li>";
  document.getElementById("list").innerHTML =
  document.getElementById("list").innerHTML + "<li>" + "Rekam Digitalkamera - 299.00 €" + "</li>";
  document.getElementById("gesamtbetrag").innerHTML =
  Number(document.getElementById("gesamtbetrag").innerHTML)
  +
  Number(document.getElementById("campreis").innerHTML); 
} */



function camkaufen() {
  document.getElementById("tabelle").innerHTML =
  document.getElementById("tabelle").innerHTML + "<td> <li>" + "Rekam Digitalkamera - 299.00 €" + "</li> </td> <br>";
  document.getElementById("zusammenrechnung").innerHTML =
  Number(document.getElementById("zusammenrechnung").innerHTML)
  +
  Number(document.getElementById("campreis").innerHTML);}


  
