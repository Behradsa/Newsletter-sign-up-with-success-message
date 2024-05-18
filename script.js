let form = document.getElementById("email-form");
let formInput = document.getElementById("email-box");
let error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  inputValue = formInput.value;
  if (inputValue == "" || inputValue == null || !isValidEmail(inputValue)) {
    e.preventDefault();
    error.style.display = "inline-block";
    formInput.classList.add("tomato");
    formInput.style.borderColor = "tomato";
    formInput.style.backgroundColor = "rgba(255,98,87,0.1)";
  } else {
    e.preventDefault();
    localStorage.setItem("email", formInput.value);
    window.location.href = "success/success.html";
  }
});
formInput.addEventListener("focus", (e) => {
  e.preventDefault();

  formInput.classList.remove("tomato");
  formInput.style.borderColor = "rgba(146, 148, 160, 0.4)";
  formInput.style.backgroundColor = "white";
});
function isValidEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
