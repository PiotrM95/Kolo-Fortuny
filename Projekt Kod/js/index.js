document.getElementById("login_button").addEventListener("click", changeToLoginPage);

function changeToLoginPage() {
  document.location.href = 'logowanie.html';
}

document.getElementById("register_button").addEventListener("click", changeToRegisterPage);

function changeToRegisterPage() {
  document.location.href = 'rejestracja.html';
}