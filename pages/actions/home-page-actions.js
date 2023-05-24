const { homePageElements } = require('../elements/home-page-elements');

// Home Page Actions

async function goToParabankWebsite () {
  await browser.url('/');
}
async function validateHomePage () {
  await homePageElements.parabankIdentifier().waitForDisplayed(10000);
  await expect(homePageElements.parabankIdentifier()).toBeDisplayed();
  await expect(homePageElements.homeTitle()).toBeExisting();
}

module.exports = {
  validateHomePage,
  goToParabankWebsite
};
