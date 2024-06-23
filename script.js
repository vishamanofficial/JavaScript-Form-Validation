const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

let flag = 1;

function validateForm() {
  if (username.value === "") {
    document.getElementById("userError").innerHTML = "Username is required";
    flag = 0;
  } else if (username.value.length < 3) {
    document.getElementById("userError").innerHTML = "Username is too short";
    flag = 0;
  } else {
    document.getElementById("userError").innerHTML = "";
    flag = 1;
  }

  if (email.value === "") {
    document.getElementById("emailError").innerHTML = "Email is required";
    flag = 0;
  } else if (email.value.length < 11) {
    document.getElementById("emailError").innerHTML = "Invalid Email";
    flag = 0;
  } else {
    document.getElementById("emailError").innerHTML = "";
    flag = 1;
  }

  if (password.value === "") {
    document.getElementById("passError").innerHTML = "Password is required";
    flag = 0;
  } else if (password.value.length < 8) {
    document.getElementById("passError").innerHTML =
      "Password must be at least 8 characters";
    flag = 0;
  } else {
    document.getElementById("passError").innerHTML = "";
    flag = 1;
  }

  if (password2.value === "") {
    document.getElementById("pass2Error").innerHTML = "Password is required";
    flag = 0;
  } else if (password2.value !== password.value) {
    document.getElementById("pass2Error").innerHTML = "Password unmatched";
    flag = 0;
  } else if (password2.value == password.value) {
    document.getElementById("pass2Error").innerHTML = "";
    flag = 1;
  }

  if (flag) {
    return true;
  } else {
    return false;
  }
}
