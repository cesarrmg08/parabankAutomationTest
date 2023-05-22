const {aboutUsElements} = require('../elements/about-us-elements')


     async function validateAboutUsPage () {
        await aboutUsElements.aboutUsIdentifier().waitForDisplayed(10000);
        await expect(aboutUsElements.aboutUsIdentifier()).toBeDisplayed();
    }

    module.exports = {
    validateAboutUsPage
    }
    