const email_text = localStorage.getItem("email");
document.getElementById("email").innerText = email_text;
function closer() {
  window.location.href = "../index.html";
}
