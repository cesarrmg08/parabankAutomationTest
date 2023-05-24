const { servicesElements } = require('../elements/services-elements');

// Services Actions

async function clickServicesButton () {
  await servicesElements.servicessButton().waitForClickable(5000);
  await servicesElements.servicessButton().click();
}

async function validateServicesPage () {
  await servicesElements.servicesIdentifier().waitForDisplayed(10000);
  await expect(servicesElements.servicesIdentifier()).toBeDisplayed();
  await expect(browser).toHaveTitleContaining('Services');
}

async function scrollToRestFulServices () {
  const restFulSpan = await servicesElements.restfulServicesSpan();
  await restFulSpan.scrollIntoView({ block: 'center', inline: 'center' });
  await expect(restFulSpan).toBeDisplayedInViewport();
}

module.exports = {
  validateServicesPage,
  clickServicesButton,
  scrollToRestFulServices
};
