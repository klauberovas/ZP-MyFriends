/**  **************************************
	Rozbalení menu
 ************************************** */
function myFunction() {
  var x = document.getElementById("menu--hidable");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/**
 *  **************************************
	Responzivní menu (zmizení znaku menu)  
 ************************************** */
function screenResize() {
  var screenWidth = window.innerWidth;
  var x = document.getElementById("menu--hidable");
  if (screenWidth > 960) {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
window.onresize = screenResize;

/** **************************************
	  PODĚKOVÁNÍ ZA ODEBÍRÁNÍ NEWSLETTER
 **************************************  */
function submitNewsletter() {
  var newsletterEmail = document.getElementById("newsletter").value;

  // Validace na email, když neobsahuje nic
  if (!newsletterEmail) {
    alert("Doplňte prosím email.");

    // Validace na email - zda obsahuje zavináč
  } else if (!newsletterEmail.includes("@")) {
    alert("V e-mailu vám chybí @.");

    // Pokud je vše v pořádku, tak pošli formulář na submit-form.com
  } else {
    fetch("https://submit-form.com/lnuX5RLz", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: newsletterEmail,
      }),
    });

    var x = document.getElementById("newsletter");
    x.style.display = "none";

    x = document.getElementById("submit-button");
    x.style.display = "none";

    x = document.getElementById("after-submit-text");
    x.style.display = "block";
  }
}

/** **************************************
	  Kontaktní formulář
 **************************************  */
function submitContactForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // Validace na jméno - zda je vyplněno
  if (!name) {
    alert("Doplňte prosím jméno a příjmení.");

    // Validace na email - zda je vyplněn
  } else if (!email) {
    alert("Doplňte prosím e-mail.");

    // Validace na email - zda obsahuje zavináč
  } else if (!email.includes("@")) {
    alert("V emailu vám chybí @.");

    // Pokud je vše v pořádku, tak pošli formulář na submit-form.com
  } else {
    fetch("https://submit-form.com/GRAIvFeS", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message,
      }),
    });

    // Pokud vše projde zobraz dialogové okno
    window.dialog.showModal();
  }
}
