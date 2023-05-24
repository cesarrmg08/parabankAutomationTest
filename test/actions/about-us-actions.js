const { aboutUsElements } = require('../elements/about-us-elements');

async function clickAboutUsButton () {
  await aboutUsElements.aboutUsButton().waitForClickable(5000);
  await aboutUsElements.aboutUsButton().click();
}
async function validateAboutUsPage () {
  await aboutUsElements.aboutUsIdentifier().waitForDisplayed(10000);
  await expect(aboutUsElements.aboutUsIdentifier()).toBeDisplayed();
  await expect(browser).toHaveTitleContaining('About Us');
}

module.exports = {
  clickAboutUsButton,
  validateAboutUsPage
};
