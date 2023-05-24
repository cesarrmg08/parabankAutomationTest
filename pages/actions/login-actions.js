const { loginElements } = require('../elements/login-elements');

// Log In Actions

async function validateLoginLabel () {
  await loginElements.loginIdentifier().waitForDisplayed(10000);
  await expect(loginElements.loginIdentifier()).toBeDisplayed();
}

async function fillUserNameField () {
  const userName = await loginElements.userNameField();
  await (userName.selector).waitForClickable(5000);
  await (userName.selector).setValue(userName.text);
}

async function fillPasswordField () {
  const password = await loginElements.passwordField();
  await (password.selector).waitForClickable(5000);
  await (password.selector).setValue(password.text);
}

async function clickLogInButton () {
  await loginElements.loginButton().waitForClickable(5000);
  await loginElements.loginButton().click();
}

async function validateInvalidLoginErrorMessage () {
  const errorMessage = loginElements.invalidLoginErrorMessage();
  await (errorMessage.selector).waitForDisplayed(10000);
  await expect(errorMessage.selector).toHaveTextContaining(errorMessage.text);
}

async function validateEmptyFieldErrorMessage () {
  const errorMessage = loginElements.emptyFieldErrorMessage();
  await (errorMessage.selector).waitForDisplayed(10000);
  await expect(errorMessage.selector).toHaveTextContaining(errorMessage.text);
}

module.exports = {
  validateLoginLabel,
  clickLogInButton,
  fillUserNameField,
  fillPasswordField,
  validateInvalidLoginErrorMessage,
  validateEmptyFieldErrorMessage

};
