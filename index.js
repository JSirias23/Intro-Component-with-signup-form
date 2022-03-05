const form = document.getElementById("form-container");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  validateForm();
});

function validateForm() {
  /* First Name */
  if (firstName.value.trim() === "" || firstName.value.trim() == null) {
    setError(firstName, "First Name cannot be empty");
  } else {
    setSuccess(firstName);
  }
  /* Last Name */
  if (lastName.value.trim() === "" || lastName.value.trim() == null) {
    setError(lastName, "Last Name cannot be empty");
  } else {
    setSuccess(lastName);
  }
  /* Email */
  if (email.value.trim() === "" || email.value.trim() == null) {
    setError(email, "Email cannot be empty");
  } else if (isEmailValid(email.value)) {
    setSuccess(email);
  } else {
    setError(email, "Provide valid email address");
  }
  /* Password */
  if (password.value.trim() === "" || password.value.trim() == null)
    setError(password, "Password cannot be empty");
  else if (
    password.value.trim().length < 6 ||
    password.value.trim().length > 20
  ) {
    setError(password, "Password min 6 and max 20 characters");
  } else {
    setSuccess(password);
  }
}

function setError(element, errorMessage) {
  const parent = element.parentElement;
  parent.classList.add("error");
  const span = parent.querySelector("span");
  span.textContent = errorMessage;
}

function setSuccess(element) {
  const parent = element.parentElement;
  if (parent.classList.contains("error")) {
    parent.classList.remove("error");
  }
  parent.classList.add("success");
}

/* Email Validation */

function isEmailValid(email) {
  const reg =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return reg.test(email);
}
