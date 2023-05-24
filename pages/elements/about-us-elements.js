// About Us Elements

const aboutUsButton = () => { return $('//a[text()="About Us"]'); };
const aboutUsIdentifier = () => { return $('//h1[text()="ParaSoft Demo Website"]'); };

const aboutUsElements = {
  aboutUsIdentifier,
  aboutUsButton
};
module.exports = {
  aboutUsElements
};
