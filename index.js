const emailInput = document.querySelector("#email-input")
const emailOutput = document.querySelector("#email-output")
const printButton = document.querySelector("#print")

printButton.addEventListener('click', event => {
    const enteredEmail = emailInput.value
    emailOutput.textContent = enteredEmail
    emailInput.value = ""
})