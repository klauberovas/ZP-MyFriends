function myFunction() {
  var x = document.getElementById("menu--hidable");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function screenResize() {
  var screenWidth = window.innerWidth;
  var x = document.getElementById("menu--hidable");
  if (screenWidth > 960){
    x.style.display = "flex";
    } else {
    x.style.display = "none";
  }
}

window.onresize = screenResize;