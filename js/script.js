const loginButton = document.getElementById("loginButton");
const logotButton = document.getElementById("logoutButton");
const inputUsername = document.getElementById("inputUsername");
const inputPassword = document.getElementById("inputPassword");

logotButton.style.display = "none";

loginButton.addEventListener("click", function () {
  localStorage.setItem("Username", inputUsername.value);
  loginButton.style.display = "none";
  inputUsername.style.display = "none";
  inputPassword.style.display = "none";
  logotButton.style.display = "block";

  if (inputUsername.value == "Guru") {
    localStorage.setItem("Role", "Guru");
  }
  if (inputUsername.value == "Dosen") {
    localStorage.setItem("Role", "Dosen");
  }
});

if (localStorage.getItem("Username")) {
  loginButton.style.display = "none";
  inputUsername.style.display = "none";
  inputPassword.style.display = "none";
  logotButton.style.display = "block";
}

logotButton.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
