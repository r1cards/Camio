/* This is used for the main menu, when the screen is small. */
function menu() {
  var x = document.getElementById("menu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}

/* This is the confirmation message for when the user clicks send. */
function confirmation() {
  confirm("Message sent, thank you for your time!");
}

/* This is the toTopButton which scrolls up to the top of the page. */
function topButton() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}