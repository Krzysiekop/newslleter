const confrButton = document.querySelector(".form__button");
const container = document.querySelector(".container");
const success = document.querySelector(".success");
const success__btn = document.querySelector(".success__button");
const success__email = document.querySelector(".success__mail");

confrButton.addEventListener("click", function (e) {
  e.preventDefault();
  let correct = validateMail();
  const value = document.querySelector(".form__input").value;
  if (correct) {
    success.style.display = "block";
    container.style.display = "none";
    success__email.textContent = value;
  } else {
    showAlert();
  }
});

success__btn.addEventListener("click", function (e) {
  e.preventDefault();
  location.reload();
});

function validateMail() {
  const emailValue = document.querySelector(".form__input").value;
  const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (emailValue.match(mailformat)) {
    return true;
  } else {
  }
}

function showAlert() {
  document.querySelector(".form__label--error").style.display = "block";
  document.querySelector(".form__input").style.backgroundColor = "pink";
}

