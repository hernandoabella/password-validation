var visible = false;

function ver() {
  var input = document.getElementById("password");
  var ver = document.getElementById("ver");

  if (visible) {
    input.type = "password";
    visible = false;
    ver.classList.remove("visible");
  } else {
    input.type = "text";
    visible = true;
    ver.classList.add("visible");
  }
}

function validar() {
  var input = document.getElementById("password").value;
  var passwordLength = input.length;

  document.getElementById("password").value = input;
  document.getElementById("largo").innerText =
    `Largo de la contraseña: ${passwordLength}`;

  var validarItems = document.querySelectorAll(".validar");

  validarItems.forEach(function (item, index) {
    var icon = item.querySelector(".icon");

    switch (index) {
      case 0:
        if (passwordLength >= 5) {
          item.classList.add("valid");
          icon.classList.remove("fa-times-circle");
          icon.classList.add("fa-check-circle");
        } else {
          item.classList.remove("valid");
          icon.classList.remove("fa-check-circle");
          icon.classList.add("fa-times-circle");
        }
        break;
      case 1:
        if (passwordLength <= 10) {
          item.classList.add("valid");
          icon.classList.remove("fa-times-circle");
          icon.classList.add("fa-check-circle");
        } else {
          item.classList.remove("valid");
          icon.classList.remove("fa-check-circle");
          icon.classList.add("fa-times-circle");
        }
        break;
      case 2:
        if (/\d/.test(input)) {
          item.classList.add("valid");
          icon.classList.remove("fa-times-circle");
          icon.classList.add("fa-check-circle");
        } else {
          item.classList.remove("valid");
          icon.classList.remove("fa-check-circle");
          icon.classList.add("fa-times-circle");
        }
        break;
      case 3:
        if (/[^\w\s]/.test(input)) {
          item.classList.add("valid");
          icon.classList.remove("fa-times-circle");
          icon.classList.add("fa-check-circle");
        } else {
          item.classList.remove("valid");
          icon.classList.remove("fa-check-circle");
          icon.classList.add("fa-times-circle");
        }
        break;
      case 4:
        if (!/\s/.test(input)) {
          item.classList.add("valid");
          icon.classList.remove("fa-times-circle");
          icon.classList.add("fa-check-circle");
        } else {
          item.classList.remove("valid");
          icon.classList.remove("fa-check-circle");
          icon.classList.add("fa-times-circle");
        }
        break;
    }
  });
}
