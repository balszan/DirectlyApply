const form = document.getElementById("registration-form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const confirmEmail = document.getElementById("confirm-email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm-password")
const source = document.getElementById("source")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  validateInputs()
})

function validateInputs() {
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const confirmEmailValue = confirmEmail.value.trim()
  const passwordValue = password.value.trim()
  const confirmPasswordValue = confirmPassword.value.trim()
  const sourceValue = source.value.trim()
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
