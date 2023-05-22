const {homePageElements} = require('../elements/home-page-elements')

    async function goToParabank () {
        await browser.url("https://parabank.parasoft.com/parabank/index.htm")
    }
     async function validateHomePage () {
        await browser.maximizeWindow();
        await homePageElements.parabankIdentifier().waitForDisplayed(10000);
        await expect(homePageElements.parabankIdentifier()).toBeDisplayed();
    }
    async function clickAboutUsButton () {
        await homePageElements.aboutUsButton().waitForClickable(5000)
       await homePageElements.aboutUsButton().click();

    }

module.exports = {
    validateHomePage, 
    goToParabank,
    clickAboutUsButton
}
