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

  document.getElementById("password").value = input;

  document.getElementById("largo").innerText = "Largo: " + input.length;

  if (input.length >= 5) {
    document.getElementById("icon0").classList.remove("far");
    document.getElementById("icon0").classList.add("fas");
    document.getElementById("icon0").classList.add("fa-check-circle");
    document.getElementById("icon0").style.color = "green";
  } else {
    document.getElementById("icon0").classList.remove("fas");
    document.getElementById("icon0").classList.add("far");
    document.getElementById("icon0").classList.add("fa-times-circle");
    document.getElementById("icon0").style.color = "red";
  }

  if (input.length <= 10) {
    document.getElementById("icon1").classList.remove("far");
    document.getElementById("icon1").classList.add("fas");
    document.getElementById("icon1").classList.add("fa-check-circle");
    document.getElementById("icon1").style.color = "green";
  } else {
    document.getElementById("icon1").classList.remove("fas");
    document.getElementById("icon1").classList.add("far");
    document.getElementById("icon1").classList.add("fa-times-circle");
    document.getElementById("icon1").style.color = "red";
  }

  if (input.match(/[0-9]/i)) {
    document.getElementById("icon2").classList.remove("far");
    document.getElementById("icon2").classList.add("fas");
    document.getElementById("icon2").classList.add("fa-check-circle");
    document.getElementById("icon2").style.color = "green";
  } else {
    document.getElementById("icon2").classList.remove("fas");
    document.getElementById("icon2").classList.add("far");
    document.getElementById("icon2").classList.add("fa-times-circle");
    document.getElementById("icon2").style.color = "red";
  }

  if (input.match(/[^A-Za-z0-9-' ']/i)) {
    document.getElementById("icon3").classList.remove("far");
    document.getElementById("icon3").classList.add("fas");
    document.getElementById("icon3").classList.add("fa-check-circle");
    document.getElementById("icon3").style.color = "green";
  } else {
    document.getElementById("icon3").classList.remove("fas");
    document.getElementById("icon3").classList.add("far");
    document.getElementById("icon3").classList.add("fa-times-circle");
    document.getElementById("icon3").style.color = "red";
  }

  if (input.match(/\s/)) {
    document.getElementById("icon4").classList.remove("fas");
    document.getElementById("icon4").classList.add("far");
    document.getElementById("icon4").classList.add("fa-times-circle");
    document.getElementById("icon4").style.color = "red";
  } else {
    document.getElementById("icon4").classList.remove("far");
    document.getElementById("icon4").classList.add("fas");
    document.getElementById("icon4").classList.add("fa-check-circle");
    document.getElementById("icon4").style.color = "green";
  }
}
