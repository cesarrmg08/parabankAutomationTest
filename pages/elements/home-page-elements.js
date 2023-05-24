// Home Page Elements

const parabankIdentifier = () => {
  return $('//p[text()="Experience the difference"]');
};
const homeTitle = () => {
  return $('//title[contains(.,"ParaBank | Welcome | Online Banking")]');
};

const homePageElements = {
  parabankIdentifier,
  homeTitle
};
module.exports = {
  homePageElements
};
