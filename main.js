/**
 * DirectlyApply Registration Form
 *
 * This script handles form validation for the user registration process.
 * It validates username, email, password and referral source.
 */

// DOM Element References

const form = document.getElementById("registration-form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const confirmEmail = document.getElementById("confirm-email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm-password")
const source = document.getElementById("source")

/**
 * Form submission handler
 * Prevents default form submission, validates inputs, and prepares user data
 */

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const isValid = validateInputs()

  if (isValid) {
    const newUser = {
      username: username.value.trim(),
      email: email.value.trim(),
      password: password.value.trim(),
      source: source.value.trim(),
    }
    console.log(newUser)
  }
})

function validateInputs() {
  // Gets all input values and trim whitespace
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const confirmEmailValue = confirmEmail.value.trim()
  const passwordValue = password.value.trim()
  const confirmPasswordValue = confirmPassword.value.trim()
  const sourceValue = source.value.trim()

  // Username validation

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be empty")
  } else {
    setSuccessFor(username)
  }

  // Email validation

  if (emailValue === "") {
    setErrorFor(email, "Email field cannot be empty")
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Please enter a valid email")
  } else {
    setSuccessFor(email)
  }

  // Confirm email validation

  if (confirmEmailValue === "") {
    setErrorFor(confirmEmail, "Email field cannot be empty")
  } else if (!isEmail(confirmEmailValue)) {
    setErrorFor(confirmEmail, "Please enter a valid email")
  } else if (confirmEmailValue !== emailValue) {
    setErrorFor(confirmEmail, "The emails don't match")
  } else {
    setSuccessFor(confirmEmail)
  }

  // Password validation

  if (passwordValue === "") {
    setErrorFor(password, "Please enter password")
  } else if (!isValidPassword(passwordValue)) {
    setErrorFor(
      password,
      "Password has to have at least 8 leters and a special character"
    )
  } else {
    setSuccessFor(password)
  }

  // Confirm password validation

  if (confirmPasswordValue === "") {
    setErrorFor(confirmPassword, "Please confirm password")
  } else if (confirmPasswordValue !== passwordValue) {
    setErrorFor(confirmPassword, "The passwords don't match")
  } else {
    setSuccessFor(confirmPassword)
  }

  // Source validation

  if (sourceValue === "") {
    setErrorFor(source, "Please select an option")
  } else {
    setSuccessFor(source)
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector("small")
  small.innerText = message
  formControl.className = "form-control error"
}

function setSuccessFor(input) {
  const formControl = input.parentElement
  formControl.className = "form-control success"
}

// Validates email format using regex

function isEmail(email) {
  return /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email)
}

// Validates password format using regex

function isValidPassword(password) {
  return /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[a-zA-Z0-9]).{8,}$/.test(
    password
  )
}
