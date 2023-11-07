const form = document.getElementById("validationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirmPass");
const showPassword = document.getElementById("showPassword");
const showConfirmPass = document.getElementById("showConfirmPass");
// formSubmit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  validateForm();
});

// setError hàm chung
const setError = (element, message) => {
  const formGroup = element.parentElement;
  const smallError = formGroup.querySelector("small");

  formGroup.className = "formGroup error";
  smallError.innerText = message;
};
// clearError hàm chung
const clearError = (element, message) => {
  const formGroup = element.parentElement;
  const smallError = formGroup.querySelector("small");

  formGroup.className = "formGroup";
  smallError.innerText = "";
};

const regexMail = (email) => {
  console.log(email);
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  console.log(emailRegex.test(String(email).toLowerCase()));
  return emailRegex.test(String(email).toLowerCase());
};

// validateForm()
const validateForm = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPassValue = confirmPass.value.trim();
  if (usernameValue === "") {
    setError(username, "Required to enter this field");
  } else if (usernameValue.length < 6) {
    setError(username, "This field is over 6 characters");
  } else if (usernameValue.length > 25) {
    setError(username, "This field is less than 25 characters");
  } else {
    clearError(username);
  }

  if (emailValue === "") {
    setError(email, "Required to enter this field");
  } else if (!regexMail(emailValue)) {
    setError(email, "Requires correct email format");
  } else {
    clearError(email);
  }

  if (passwordValue === "") {
    setError(password, "Required to enter this field");
  } else if (passwordValue.length < 6) {
    setError(password, "Password is over 6 characters");
  } else if (passwordValue.length > 25) {
    setError(password, "Password is less than 25 characters");
  } else {
    clearError(password);
  }

  if (confirmPassValue === "") {
    setError(confirmPass, "Required to enter this field");
  } else if (confirmPassValue.length < 6) {
    setError(confirmPass, "Password is over 6 characters");
  } else if (confirmPassValue.length > 25) {
    setError(confirmPass, "Password is less than 25 characters");
  } else if (confirmPassValue !== passwordValue) {
    setError(confirmPass, "Password is incorrect");
  } else {
    clearError(confirmPass);
  }

  return true;
};

// show Password
const toggleShowPassword = () => {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }

  setTimeout(() => {
    password.type = "password";
  }, 500);
};

const toggleShowConfirmPass = () => {
  if (confirmPass.type === "password") {
    confirmPass.type = "text";
  } else {
    confirmPass.type = "password";
  }

  setTimeout(() => {
    confirmPass.type = "password";
  }, 500);
};

showPassword.addEventListener("click", toggleShowPassword);
showConfirmPass.addEventListener("click", toggleShowConfirmPass);
