//Elements from Login Section

const loginIdentifier = () => { return $('//h2[text()="Customer Login"]'); }
const loginButton = () => { return $('//input[@value="Log In"]'); }
const userNameField = () => { 
    return {
    selector: $('//input[@name="username"]'),
    text: 'testUserName'
    }; 
}
const passwordField = () => { 
    return {
    selector: $('//input[@name="password"]'),
    text: 'testPassWord'
    }; 
}
const invalidLoginErrorMessage = () => { 
    return {
    selector: $('//p[contains(.,"An internal error has occurred and has been logged.")]'),
    text: 'An internal error has occurred and has been logged'
    }; 
}
const emptyFieldErrorMessage = () => { 
    return {
    selector: $('//p[contains(.,"Please enter a username and password.")]'),
    text: 'Please enter a username and password'
    }; 
}




const loginElements = {
    loginIdentifier,
    userNameField,
    passwordField,
    loginButton,
    invalidLoginErrorMessage,
    emptyFieldErrorMessage
 }
 module.exports = {
    loginElements
 }