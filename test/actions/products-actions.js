const { productsElements } = require('../elements/products-elements');

async function clickPruductsButton () {
  await productsElements.productsButton().waitForClickable(5000);
  await productsElements.productsButton().click();
}

async function validateProductsPage () {
  await productsElements.contactUsButton().waitForDisplayed(10000);
  await expect(productsElements.contactUsButton()).toBeDisplayed();
  await expect(productsElements.productsTitle()).toBeExisting();
}

async function clickContactUsButton () {
  await productsElements.contactUsButton().waitForClickable(5000);
  await productsElements.contactUsButton().click();
}

async function validateContactUsForm () {
  await productsElements.messageUsTitle().waitForDisplayed(10000);
  await expect(productsElements.contactUsButton()).toBeDisplayed();
}

module.exports = {
  clickPruductsButton,
  validateProductsPage,
  clickContactUsButton,
  validateContactUsForm

};
