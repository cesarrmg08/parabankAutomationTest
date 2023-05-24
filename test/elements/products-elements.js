// Products Elements

const productsButton = () => { return $('//a[text()="Products"]'); };
const productsTitle = () => { return $('//title[contains(.,"Automated Software Testing Tool Suite | Parasoft")]'); };
const contactUsButton = () => { return $('//ul[@id="menu-header-menu"]//a[text()="Contact Us"]'); };
const messageUsTitle = () => { return $('//h3[text()="Message Us"]'); };

const productsElements = {
  productsButton,
  productsTitle,
  contactUsButton,
  messageUsTitle
};
module.exports = {
  productsElements
};
