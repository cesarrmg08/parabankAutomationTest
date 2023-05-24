// Services Elements

const servicessButton = () => { return $('//a[text()="Services"]'); };
const servicesIdentifier = () => {
  return $('//span[contains(.,"Available Bookstore SOAP services")]');
};
const restfulServicesSpan = () => {
  return $('//span[contains(.,"Available RESTful services")]');
};

const servicesElements = {
  servicessButton,
  servicesIdentifier,
  restfulServicesSpan
};
module.exports = {
  servicesElements
};
