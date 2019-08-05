

// Selve pop-uppen
var modal = document.getElementById("popup");

// Knappen der åbner pop-uppen
var btn = document.getElementById("myBtn");

// Elementet der lukker pop-uppen
var span = document.getElementsByClassName("close")[0];

// Åben pop-uppen 
btn.onclick = function() {
  modal.style.display = "block";
}

// Krydsknappen
span.onclick = function() {
  modal.style.display = "none";
}

// Luk pop-uppen når man klikker udenfor vinduet
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}